from google import genai

from api.config import Settings


class EmbeddingService:
    def __init__(self, settings: Settings):
        self.client = None
        self.model = settings.gemini_embedding_model
        if settings.gemini_api_key:
            self.client = genai.Client(api_key=settings.gemini_api_key)

    async def embed_many(self, texts: list[str]) -> list[list[float]]:
        if not self.client:
            # Modo Simulación Local (Generar vectores simulados)
            import random
            return [[random.random() for _ in range(768)] for _ in texts]

        if not texts:
            return []
        response = await self.client.aio.models.embed_content(
            model=self.model,
            contents=texts,
        )
        return [item.values for item in response.embeddings]

    async def embed_one(self, text: str) -> list[float]:
        return (await self.embed_many([text]))[0]
