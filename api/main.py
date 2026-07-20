from functools import lru_cache
from pathlib import Path
from typing import Annotated
from uuid import UUID

from fastapi import Depends, FastAPI, File, Form, HTTPException, UploadFile, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import httpx
from fastapi.staticfiles import StaticFiles

from api.config import Settings, get_settings
from api.schemas import (
    ChatRequest,
    ChatResponse,
    HealthResponse,
    IngestResponse,
    SessionTokenRequest,
    SessionTokenResponse,
    SourceSummary,
    UrlIngestRequest,
)
from api.security import (
    create_student_token,
    require_admin_key,
    require_integration_key,
    require_student_session,
)
from api.services.assistant import NormativeAdvisor
from api.services.embeddings import EmbeddingService
from api.services.ingestion import IngestionError, fetch_allowed_url, ingest_bytes
from api.services.vector_store import SQLiteVectorStore

settings = get_settings()
app = FastAPI(
    title=settings.app_name,
    version="2.0.0",
    description="API de asesoría académica normativa y procedimental para cursos mandatorios.",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.trusted_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "DELETE"],
    allow_headers=["Authorization", "Content-Type", "X-Admin-Key", "X-Integration-Key"],
)
STATIC_DIR = Path(__file__).parent / "static"
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@lru_cache
def get_store() -> SQLiteVectorStore:
    return SQLiteVectorStore(settings.database_path)


@lru_cache
def get_advisor() -> NormativeAdvisor:
    try:
        return NormativeAdvisor(settings, get_store())
    except RuntimeError as exc:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=str(exc)) from exc


@app.get("/", include_in_schema=False)
def home() -> FileResponse:
    # Just in case static files index isn't present
    index_path = STATIC_DIR / "index.html"
    if not index_path.exists():
        index_path.parent.mkdir(parents=True, exist_ok=True)
        # Create a simple fallback page
        with open(index_path, "w", encoding="utf-8") as f:
            f.write("<h1>Asesor Normativo Policial API</h1>")
    return FileResponse(index_path)


@app.get("/health", response_model=HealthResponse)
def health(store: SQLiteVectorStore = Depends(get_store)) -> HealthResponse:
    return HealthResponse(service=settings.app_name, corpus_chunks=store.count_chunks())


@app.post(
    "/api/v1/session-token",
    response_model=SessionTokenResponse,
    dependencies=[Depends(require_integration_key)],
)
def session_token(payload: SessionTokenRequest) -> SessionTokenResponse:
    token, expires_in = create_student_token(payload.student_id, payload.course_id, payload.display_name, settings)
    return SessionTokenResponse(access_token=token, expires_in=expires_in)


@app.post("/api/v1/chat", response_model=ChatResponse)
async def chat(
    payload: ChatRequest,
    claims: dict = Depends(require_student_session),
    advisor: NormativeAdvisor = Depends(get_advisor),
) -> ChatResponse:
    try:
        return await advisor.respond(payload, claims)
    except RuntimeError as exc:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail=str(exc)) from exc


@app.post(
    "/api/v1/admin/sources/upload",
    response_model=IngestResponse,
    dependencies=[Depends(require_admin_key)],
)
async def upload_source(
    file: Annotated[UploadFile, File()],
    title: Annotated[str, Form()],
    source_type: Annotated[str, Form()] = "otro",
    effective_date: Annotated[str | None, Form()] = None,
    url: Annotated[str | None, Form()] = None,
    notes: Annotated[str | None, Form()] = None,
    store: SQLiteVectorStore = Depends(get_store),
) -> IngestResponse:
    allowed_types = {"ley", "decreto", "resolucion", "reglamento", "procedimiento", "jurisprudencia", "manual", "otro"}
    if source_type not in allowed_types:
        raise HTTPException(status_code=422, detail="Tipo de fuente no permitido")
    data = await file.read()
    if len(data) > settings.max_upload_mb * 1024 * 1024:
        raise HTTPException(status_code=413, detail="El archivo supera el límite configurado")
    try:
        source_id, chunks, sha256 = await ingest_bytes(
            data=data,
            filename=file.filename or "documento",
            content_type=file.content_type,
            title=title,
            url=url,
            source_type=source_type,
            effective_date=effective_date,
            notes=notes,
            embeddings=EmbeddingService(settings),
            store=store,
        )
    except (IngestionError, RuntimeError) as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc
    return IngestResponse(source_id=source_id, title=title, chunks_created=chunks, sha256=sha256)


@app.post(
    "/api/v1/admin/sources/url",
    response_model=IngestResponse,
    dependencies=[Depends(require_admin_key)],
)
async def ingest_url(
    payload: UrlIngestRequest,
    store: SQLiteVectorStore = Depends(get_store),
) -> IngestResponse:
    try:
        data, filename, content_type = await fetch_allowed_url(str(payload.url), settings)
        title = payload.title or filename
        source_id, chunks, sha256 = await ingest_bytes(
            data=data,
            filename=filename,
            content_type=content_type,
            title=title,
            url=str(payload.url),
            source_type=payload.source_type,
            effective_date=payload.effective_date,
            notes=payload.notes,
            embeddings=EmbeddingService(settings),
            store=store,
        )
    except (IngestionError, RuntimeError, httpx.HTTPError) as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc
    return IngestResponse(source_id=source_id, title=title, chunks_created=chunks, sha256=sha256)


@app.get(
    "/api/v1/admin/sources",
    response_model=list[SourceSummary],
    dependencies=[Depends(require_admin_key)],
)
def list_sources(store: SQLiteVectorStore = Depends(get_store)) -> list[SourceSummary]:
    return [SourceSummary(**row) for row in store.list_sources()]


@app.delete(
    "/api/v1/admin/sources/{source_id}",
    status_code=204,
    dependencies=[Depends(require_admin_key)],
)
def delete_source(source_id: UUID, store: SQLiteVectorStore = Depends(get_store)) -> None:
    if not store.delete_source(str(source_id)):
        raise HTTPException(status_code=404, detail="Fuente no encontrada")
