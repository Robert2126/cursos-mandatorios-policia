from datetime import datetime
from typing import Literal
from uuid import UUID

from pydantic import BaseModel, Field, HttpUrl, field_validator


class HealthResponse(BaseModel):
    status: Literal["ok"] = "ok"
    service: str
    corpus_chunks: int


class SessionTokenRequest(BaseModel):
    student_id: str = Field(min_length=1, max_length=100)
    course_id: str | None = Field(default=None, max_length=100)
    display_name: str | None = Field(default=None, max_length=120)


class SessionTokenResponse(BaseModel):
    access_token: str
    token_type: Literal["bearer"] = "bearer"
    expires_in: int


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=8000)


class ChatRequest(BaseModel):
    question: str = Field(min_length=3, max_length=6000)
    course_id: str | None = Field(default=None, max_length=100)
    topic: str | None = Field(default=None, max_length=200)
    history: list[ChatMessage] = Field(default_factory=list, max_length=8)

    @field_validator("question")
    @classmethod
    def normalize_question(cls, value: str) -> str:
        return " ".join(value.split())


class SourceCitation(BaseModel):
    label: str
    source_id: UUID
    title: str
    source_type: str
    effective_date: str | None = None
    url: str | None = None
    page: int | None = None
    article: str | None = None
    excerpt: str
    similarity: float


class ChatResponse(BaseModel):
    answer: str
    confidence: Literal["alta", "media", "baja"]
    supported: bool
    citations: list[SourceCitation]
    limitations: list[str] = Field(default_factory=list)
    generated_at: datetime


class UrlIngestRequest(BaseModel):
    url: HttpUrl
    title: str | None = Field(default=None, max_length=300)
    source_type: Literal["ley", "decreto", "resolucion", "reglamento", "procedimiento", "jurisprudencia", "manual", "otro"] = "otro"
    effective_date: str | None = None
    notes: str | None = Field(default=None, max_length=1000)


class IngestResponse(BaseModel):
    source_id: UUID
    title: str
    chunks_created: int
    sha256: str


class SourceSummary(BaseModel):
    source_id: UUID
    title: str
    url: str | None
    source_type: str
    effective_date: str | None
    sha256: str
    chunks: int
    created_at: datetime
