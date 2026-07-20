import hashlib
import ipaddress
import re
import socket
from io import BytesIO
from pathlib import Path
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup
from docx import Document
from pypdf import PdfReader

from app.config import Settings
from app.services.embeddings import EmbeddingService
from app.services.vector_store import SQLiteVectorStore

ARTICLE_PATTERN = re.compile(r"(?i)\b(?:art[ií]culo|art\.)\s*(\d+[A-Za-zº°-]*)")


class IngestionError(ValueError):
    pass


def _clean_text(text: str) -> str:
    text = text.replace("\x00", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def _extract_pdf(data: bytes) -> list[dict]:
    reader = PdfReader(BytesIO(data))
    sections: list[dict] = []
    for index, page in enumerate(reader.pages, start=1):
        text = _clean_text(page.extract_text() or "")
        if text:
            sections.append({"text": text, "page": index})
    return sections


def _extract_docx(data: bytes) -> list[dict]:
    document = Document(BytesIO(data))
    text = _clean_text("\n".join(paragraph.text for paragraph in document.paragraphs))
    return [{"text": text, "page": None}] if text else []


def _extract_html(data: bytes) -> list[dict]:
    soup = BeautifulSoup(data, "html.parser")
    for element in soup(["script", "style", "nav", "footer", "header"]):
        element.decompose()
    text = _clean_text(soup.get_text("\n"))
    return [{"text": text, "page": None}] if text else []


def extract_sections(data: bytes, filename: str, content_type: str | None = None) -> list[dict]:
    suffix = Path(filename).suffix.lower()
    if suffix == ".pdf" or content_type == "application/pdf":
        sections = _extract_pdf(data)
    elif suffix == ".docx" or content_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        sections = _extract_docx(data)
    elif suffix in {".html", ".htm"} or content_type == "text/html":
        sections = _extract_html(data)
    elif suffix in {".txt", ".md"} or (content_type or "").startswith("text/"):
        text = _clean_text(data.decode("utf-8", errors="replace"))
        sections = [{"text": text, "page": None}] if text else []
    else:
        raise IngestionError("Formato no compatible. Use PDF, DOCX, TXT, MD o HTML")
    if not sections:
        raise IngestionError("No se pudo extraer texto del documento")
    return sections


def chunk_sections(sections: list[dict], target_chars: int = 1800, overlap_chars: int = 250) -> list[dict]:
    chunks: list[dict] = []
    for section in sections:
        paragraphs = [item.strip() for item in re.split(r"\n\s*\n|(?<=\.)\s+(?=[A-ZÁÉÍÓÚÑ])", section["text"]) if item.strip()]
        current = ""
        active_article: str | None = None
        chunk_article: str | None = None
        for paragraph in paragraphs:
            article_match = ARTICLE_PATTERN.search(paragraph)
            paragraph_article = article_match.group(1) if article_match else active_article
            candidate = f"{current}\n{paragraph}".strip()
            if current and len(candidate) > target_chars:
                chunks.append({
                    "content": current,
                    "page": section.get("page"),
                    "article": chunk_article,
                    "metadata": {},
                })
                current = (current[-overlap_chars:] + "\n" + paragraph).strip()
                chunk_article = paragraph_article
            else:
                if not current:
                    chunk_article = paragraph_article
                current = candidate
            if article_match:
                active_article = article_match.group(1)
                if chunk_article is None:
                    chunk_article = active_article
        if current:
            chunks.append({
                "content": current,
                "page": section.get("page"),
                "article": chunk_article,
                "metadata": {},
            })
    return [chunk for chunk in chunks if len(chunk["content"]) >= 80]


def _host_allowed(host: str, allowed_domains: list[str]) -> bool:
    host = host.lower().rstrip(".")
    return any(host == domain or host.endswith("." + domain) for domain in allowed_domains)


def _reject_private_host(host: str) -> None:
    try:
        addresses = socket.getaddrinfo(host, None)
    except socket.gaierror as exc:
        raise IngestionError("No fue posible resolver el dominio") from exc
    for item in addresses:
        ip = ipaddress.ip_address(item[4][0])
        if ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved or ip.is_multicast:
            raise IngestionError("El dominio resuelve a una dirección no permitida")


async def fetch_allowed_url(url: str, settings: Settings) -> tuple[bytes, str, str]:
    parsed = urlparse(url)
    if parsed.scheme != "https" or not parsed.hostname:
        raise IngestionError("Solo se permiten URL HTTPS válidas")
    if not _host_allowed(parsed.hostname, settings.allowed_source_domains):
        raise IngestionError("El dominio no está incluido en la lista de fuentes autorizadas")
    _reject_private_host(parsed.hostname)
    async with httpx.AsyncClient(timeout=30, follow_redirects=True, headers={"User-Agent": "AsesorNormativoPolicial/1.0"}) as client:
        response = await client.get(url)
        response.raise_for_status()
    final = urlparse(str(response.url))
    if not final.hostname or not _host_allowed(final.hostname, settings.allowed_source_domains):
        raise IngestionError("La redirección terminó en un dominio no autorizado")
    content_type = response.headers.get("content-type", "application/octet-stream").split(";", 1)[0]
    filename = Path(final.path).name or "fuente.html"
    if content_type == "application/pdf" and not filename.lower().endswith(".pdf"):
        filename += ".pdf"
    elif content_type == "text/html" and not filename.lower().endswith((".html", ".htm")):
        filename += ".html"
    return response.content, filename, content_type


async def ingest_bytes(
    *,
    data: bytes,
    filename: str,
    content_type: str | None,
    title: str,
    url: str | None,
    source_type: str,
    effective_date: str | None,
    notes: str | None,
    embeddings: EmbeddingService,
    store: SQLiteVectorStore,
) -> tuple[str, int, str]:
    sha256 = hashlib.sha256(data).hexdigest()
    if store.has_sha256(sha256):
        raise IngestionError("La fuente ya fue incorporada al corpus")
    sections = extract_sections(data, filename, content_type)
    chunks = chunk_sections(sections)
    if not chunks:
        raise IngestionError("El documento no produjo fragmentos útiles")
    vectors: list[list[float]] = []
    for start in range(0, len(chunks), 64):
        vectors.extend(await embeddings.embed_many([item["content"] for item in chunks[start:start + 64]]))
    source_id = store.add_source(
        title=title,
        url=url,
        source_type=source_type,
        effective_date=effective_date,
        sha256=sha256,
        source_metadata={"filename": filename, "notes": notes},
        chunks=chunks,
        embeddings=vectors,
    )
    return str(source_id), len(chunks), sha256
