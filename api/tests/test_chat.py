import os
from datetime import datetime, timezone
from pathlib import Path

os.environ["DATABASE_PATH"] = str(Path(__file__).parent / "test.db")
os.environ["ALLOW_ANONYMOUS_CHAT"] = "true"

import jwt  # noqa: E402
from fastapi.testclient import TestClient  # noqa: E402

from api.config import get_settings  # noqa: E402
from api.main import app, get_advisor  # noqa: E402
from api.schemas import ChatResponse  # noqa: E402


class StubAdvisor:
    async def respond(self, payload, claims) -> ChatResponse:
        return ChatResponse(
            answer="Respuesta de prueba [F1]",
            confidence="alta",
            supported=True,
            citations=[],
            limitations=[],
            generated_at=datetime.now(timezone.utc),
        )


app.dependency_overrides[get_advisor] = lambda: StubAdvisor()
client = TestClient(app)


def test_chat_allows_anonymous_when_enabled() -> None:
    response = client.post("/api/v1/chat", json={"question": "¿Cuál es el procedimiento aplicable?"})
    assert response.status_code == 200
    assert response.json()["answer"] == "Respuesta de prueba [F1]"


def test_chat_rejects_malformed_token() -> None:
    response = client.post(
        "/api/v1/chat",
        json={"question": "¿Cuál es el procedimiento aplicable?"},
        headers={"Authorization": "Bearer not-a-real-token"},
    )
    assert response.status_code == 401


def test_chat_accepts_valid_session_token_from_session_endpoint() -> None:
    settings = get_settings()
    token_response = client.post(
        "/api/v1/session-token",
        json={"student_id": "est-1", "course_id": "curso-1"},
        headers={"X-Integration-Key": settings.integration_api_key},
    )
    assert token_response.status_code == 200
    access_token = token_response.json()["access_token"]

    response = client.post(
        "/api/v1/chat",
        json={"question": "¿Cuál es el procedimiento aplicable?"},
        headers={"Authorization": f"Bearer {access_token}"},
    )
    assert response.status_code == 200


def test_chat_rejects_token_with_wrong_role() -> None:
    settings = get_settings()
    bad_token = jwt.encode(
        {"sub": "admin-1", "role": "admin", "iss": settings.app_name},
        settings.jwt_secret,
        algorithm="HS256",
    )
    response = client.post(
        "/api/v1/chat",
        json={"question": "¿Cuál es el procedimiento aplicable?"},
        headers={"Authorization": f"Bearer {bad_token}"},
    )
    assert response.status_code == 403


def test_session_token_requires_integration_key() -> None:
    response = client.post("/api/v1/session-token", json={"student_id": "est-1"})
    assert response.status_code == 401
