from api.services.ingestion import chunk_sections


def test_chunking_preserves_page() -> None:
    text = "Artículo 1. Objeto. " + ("Contenido normativo verificable. " * 120)
    chunks = chunk_sections([{"text": text, "page": 4}], target_chars=500, overlap_chars=50)
    assert len(chunks) > 1
    assert all(chunk["page"] == 4 for chunk in chunks)
