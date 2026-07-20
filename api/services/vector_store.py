import json
import sqlite3
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from uuid import UUID, uuid4

import numpy as np


@dataclass(slots=True)
class SearchHit:
    chunk_id: str
    source_id: str
    title: str
    source_type: str
    effective_date: str | None
    url: str | None
    page: int | None
    article: str | None
    content: str
    similarity: float
    metadata: dict


class SQLiteVectorStore:
    def __init__(self, path: Path):
        self.path = path
        self._init_db()

    def _connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self.path)
        connection.row_factory = sqlite3.Row
        return connection

    def _init_db(self) -> None:
        with self._connect() as conn:
            conn.execute("PRAGMA journal_mode=WAL")
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS sources (
                    source_id TEXT PRIMARY KEY,
                    title TEXT NOT NULL,
                    url TEXT,
                    source_type TEXT NOT NULL,
                    effective_date TEXT,
                    sha256 TEXT NOT NULL UNIQUE,
                    metadata_json TEXT NOT NULL,
                    created_at TEXT NOT NULL
                )
                """
            )
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS chunks (
                    chunk_id TEXT PRIMARY KEY,
                    source_id TEXT NOT NULL,
                    ordinal INTEGER NOT NULL,
                    page INTEGER,
                    article TEXT,
                    content TEXT NOT NULL,
                    embedding BLOB NOT NULL,
                    embedding_dim INTEGER NOT NULL,
                    metadata_json TEXT NOT NULL,
                    FOREIGN KEY(source_id) REFERENCES sources(source_id) ON DELETE CASCADE
                )
                """
            )
            conn.execute("CREATE INDEX IF NOT EXISTS idx_chunks_source ON chunks(source_id)")

    def has_sha256(self, sha256: str) -> bool:
        with self._connect() as conn:
            return conn.execute("SELECT 1 FROM sources WHERE sha256 = ?", (sha256,)).fetchone() is not None

    def add_source(
        self,
        *,
        title: str,
        url: str | None,
        source_type: str,
        effective_date: str | None,
        sha256: str,
        source_metadata: dict,
        chunks: list[dict],
        embeddings: list[list[float]],
    ) -> UUID:
        if len(chunks) != len(embeddings):
            raise ValueError("La cantidad de fragmentos y embeddings no coincide")
        source_id = uuid4()
        created_at = datetime.now(timezone.utc).isoformat()
        with self._connect() as conn:
            conn.execute("PRAGMA foreign_keys=ON")
            conn.execute(
                "INSERT INTO sources VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                (
                    str(source_id), title, url, source_type, effective_date, sha256,
                    json.dumps(source_metadata, ensure_ascii=False), created_at,
                ),
            )
            for ordinal, (chunk, embedding) in enumerate(zip(chunks, embeddings, strict=True)):
                vector = np.asarray(embedding, dtype=np.float32)
                conn.execute(
                    "INSERT INTO chunks VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    (
                        str(uuid4()), str(source_id), ordinal, chunk.get("page"), chunk.get("article"),
                        chunk["content"], vector.tobytes(), int(vector.size),
                        json.dumps(chunk.get("metadata", {}), ensure_ascii=False),
                    ),
                )
        return source_id

    def search(self, query_embedding: list[float], top_k: int, min_similarity: float) -> list[SearchHit]:
        query = np.asarray(query_embedding, dtype=np.float32)
        query_norm = float(np.linalg.norm(query))
        if query_norm == 0:
            return []
        
        with self._connect() as conn:
            rows = conn.execute(
                """
                SELECT c.*, s.title, s.source_type, s.effective_date, s.url, s.metadata_json AS source_metadata
                FROM chunks c JOIN sources s ON s.source_id = c.source_id
                """
            ).fetchall()
            
        if not rows:
            return []
            
        # Extraer todos los vectores en memoria de manera masiva
        vectors = [np.frombuffer(row["embedding"], dtype=np.float32, count=row["embedding_dim"]) for row in rows]
        matrix = np.vstack(vectors)
        
        # Calcular similitudes usando operaciones vectorizadas de NumPy (más eficiente que bucle for)
        norms = np.linalg.norm(matrix, axis=1)
        dot_products = np.dot(matrix, query)
        denominators = query_norm * norms
        similarities = np.where(denominators > 0, dot_products / denominators, -1.0)
        
        hits: list[SearchHit] = []
        for idx, row in enumerate(rows):
            similarity = float(similarities[idx])
            if similarity < min_similarity:
                continue
            metadata = json.loads(row["metadata_json"])
            metadata["source"] = json.loads(row["source_metadata"])
            hits.append(
                SearchHit(
                    chunk_id=row["chunk_id"], source_id=row["source_id"], title=row["title"], source_type=row["source_type"], effective_date=row["effective_date"],
                    url=row["url"], page=row["page"], article=row["article"],
                    content=row["content"], similarity=similarity, metadata=metadata,
                )
            )
        hits.sort(key=lambda item: item.similarity, reverse=True)
        return hits[:top_k]

    def count_chunks(self) -> int:
        with self._connect() as conn:
            return int(conn.execute("SELECT COUNT(*) FROM chunks").fetchone()[0])

    def list_sources(self) -> list[dict]:
        with self._connect() as conn:
            rows = conn.execute(
                """
                SELECT s.*, COUNT(c.chunk_id) AS chunks
                FROM sources s LEFT JOIN chunks c ON c.source_id = s.source_id
                GROUP BY s.source_id ORDER BY s.created_at DESC
                """
            ).fetchall()
        return [dict(row) for row in rows]

    def delete_source(self, source_id: str) -> bool:
        with self._connect() as conn:
            conn.execute("PRAGMA foreign_keys=ON")
            cursor = conn.execute("DELETE FROM sources WHERE source_id = ?", (source_id,))
            return cursor.rowcount > 0
