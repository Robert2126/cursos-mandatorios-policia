from functools import lru_cache
from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "Asesor Normativo Policial"
    environment: str = "development"
    openai_api_key: str = ""
    openai_model: str = "gpt-5.4-mini"
    openai_embedding_model: str = "text-embedding-3-small"
    database_path: Path = Path("./data/advisor.db")

    admin_api_key: str = Field(default="cambie-esta-clave-administrativa", min_length=12)
    integration_api_key: str = Field(default="cambie-esta-clave-integracion", min_length=12)
    jwt_secret: str = Field(default="cambie-esta-clave-jwt-por-una-de-32-caracteres", min_length=24)
    jwt_ttl_minutes: int = Field(default=15, ge=5, le=240)
    allow_anonymous_chat: bool = True

    trusted_origins_csv: str = Field(default="http://localhost:8000", validation_alias="TRUSTED_ORIGINS")
    allowed_source_domains_csv: str = Field(
        default="suin-juriscol.gov.co,policia.gov.co,funcionpublica.gov.co,fiscalia.gov.co,corteconstitucional.gov.co",
        validation_alias="ALLOWED_SOURCE_DOMAINS",
    )

    top_k: int = Field(default=6, ge=1, le=12)
    min_similarity: float = Field(default=0.20, ge=-1.0, le=1.0)
    max_context_chars: int = Field(default=18000, ge=2000, le=60000)
    max_upload_mb: int = Field(default=25, ge=1, le=100)

    @property
    def trusted_origins(self) -> list[str]:
        return [item.strip() for item in self.trusted_origins_csv.split(",") if item.strip()]

    @property
    def allowed_source_domains(self) -> list[str]:
        return [item.strip().lower() for item in self.allowed_source_domains_csv.split(",") if item.strip()]


@lru_cache
def get_settings() -> Settings:
    settings = Settings()
    settings.database_path.parent.mkdir(parents=True, exist_ok=True)
    return settings
