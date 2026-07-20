import os
from pathlib import Path

os.environ["DATABASE_PATH"] = str(Path(__file__).parent / "test.db")
os.environ["ALLOW_ANONYMOUS_CHAT"] = "true"

from fastapi.testclient import TestClient  # noqa: E402
from app.main import app  # noqa: E402


def test_health() -> None:
    client = TestClient(app)
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"
