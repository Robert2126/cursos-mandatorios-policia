import re
from datetime import datetime, timezone

from api.config import Settings
from api.prompts import SYSTEM_INSTRUCTIONS, build_user_prompt
from api.schemas import ChatRequest, ChatResponse, SourceCitation
from api.services.embeddings import EmbeddingService
from api.services.llm import LLMService
from api.services.vector_store import SQLiteVectorStore


class NormativeAdvisor:
    def __init__(self, settings: Settings, store: SQLiteVectorStore):
        self.settings = settings
        self.store = store
        self.embeddings = EmbeddingService(settings)
        self.llm = LLMService(settings)

    async def respond(self, request: ChatRequest, token_claims: dict) -> ChatResponse:
        query = request.question
        if request.topic:
            query += f"\nTema: {request.topic}"
        if request.course_id or token_claims.get("course_id"):
            query += f"\nCurso: {request.course_id or token_claims.get('course_id')}"

        query_embedding = await self.embeddings.embed_one(query)
        hits = self.store.search(query_embedding, self.settings.top_k, self.settings.min_similarity)

        citations: list[SourceCitation] = []
        context_parts: list[str] = []
        total_chars = 0
        for index, hit in enumerate(hits, start=1):
            label = f"F{index}"
            excerpt = hit.content[:900].strip()
            citation = SourceCitation(
                label=label,
                source_id=hit.source_id,
                title=hit.title,
                source_type=hit.source_type,
                effective_date=hit.effective_date,
                url=hit.url,
                page=hit.page,
                article=hit.article,
                excerpt=excerpt,
                similarity=round(hit.similarity, 4),
            )
            citations.append(citation)
            header = f"[{label}] Título: {hit.title}; tipo: {hit.source_type}; fecha de vigencia o referencia: {hit.effective_date or 'no registrada'}; URL: {hit.url or 'no registrada'}; página: {hit.page or 'N/A'}; artículo: {hit.article or 'N/A'}"
            block = f"{header}\n{hit.content}"
            if total_chars + len(block) > self.settings.max_context_chars:
                break
            context_parts.append(block)
            total_chars += len(block)

        history = "\n".join(f"{message.role.upper()}: {message.content}" for message in request.history[-8:])
        prompt = build_user_prompt(
            question=request.question,
            context="\n\n".join(context_parts),
            history=history,
            course_id=request.course_id or token_claims.get("course_id"),
            topic=request.topic,
        )
        answer = await self.llm.answer(SYSTEM_INSTRUCTIONS, prompt)

        cited_labels = set(re.findall(r"\[(F\d+)\]", answer))
        valid_labels = {citation.label for citation in citations}
        invalid = cited_labels - valid_labels
        limitations: list[str] = []
        supported = bool(citations) and not invalid and bool(cited_labels)

        if not citations:
            limitations.append("No se recuperaron fuentes suficientemente relacionadas con la consulta.")
        if invalid:
            limitations.append("La respuesta incluyó referencias que no corresponden al conjunto recuperado; requiere revisión.")
        if citations and not cited_labels:
            limitations.append("La respuesta no incorporó citas explícitas y debe revisarse antes de utilizarse.")

        top_score = citations[0].similarity if citations else -1.0
        if supported and top_score >= 0.55:
            confidence = "alta"
        elif supported and top_score >= self.settings.min_similarity:
            confidence = "media"
        else:
            confidence = "baja"

        return ChatResponse(
            answer=answer,
            confidence=confidence,
            supported=supported,
            citations=citations,
            limitations=limitations,
            generated_at=datetime.now(timezone.utc),
        )
