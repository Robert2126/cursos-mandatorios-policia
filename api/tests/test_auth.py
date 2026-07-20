import jwt
import pytest
from fastapi import HTTPException
from fastapi.security import HTTPAuthorizationCredentials
from starlette.requests import Request

from api.config import Settings
from api.security import (
    create_student_token,
    require_admin_key,
    require_integration_key,
    require_student_session,
)


def make_settings(**overrides) -> Settings:
    defaults = dict(
        app_name="Test Advisor",
        admin_api_key="admin-secret-key-123",
        integration_api_key="integration-secret-key-123",
        jwt_secret="a" * 32,
        jwt_ttl_minutes=15,
        allow_anonymous_chat=True,
    )
    defaults.update(overrides)
    return Settings(**defaults)


def make_request() -> Request:
    return Request({"type": "http", "headers": []})


def bearer(token: str) -> HTTPAuthorizationCredentials:
    return HTTPAuthorizationCredentials(scheme="Bearer", credentials=token)


def test_require_admin_key_accepts_correct_key() -> None:
    settings = make_settings()
    assert require_admin_key(x_admin_key="admin-secret-key-123", settings=settings) is None


def test_require_admin_key_rejects_missing_key() -> None:
    settings = make_settings()
    with pytest.raises(HTTPException) as exc_info:
        require_admin_key(x_admin_key=None, settings=settings)
    assert exc_info.value.status_code == 401


def test_require_admin_key_rejects_wrong_key() -> None:
    settings = make_settings()
    with pytest.raises(HTTPException) as exc_info:
        require_admin_key(x_admin_key="wrong-key", settings=settings)
    assert exc_info.value.status_code == 401


def test_require_integration_key_accepts_correct_key() -> None:
    settings = make_settings()
    assert require_integration_key(x_integration_key="integration-secret-key-123", settings=settings) is None


def test_require_integration_key_rejects_wrong_key() -> None:
    settings = make_settings()
    with pytest.raises(HTTPException) as exc_info:
        require_integration_key(x_integration_key="nope", settings=settings)
    assert exc_info.value.status_code == 401


def test_create_student_token_round_trips_claims() -> None:
    settings = make_settings(jwt_ttl_minutes=30)
    token, expires_in = create_student_token("student-1", "curso-101", "Roberto", settings)
    assert expires_in == 30 * 60
    payload = jwt.decode(token, settings.jwt_secret, algorithms=["HS256"], issuer=settings.app_name)
    assert payload["sub"] == "student-1"
    assert payload["course_id"] == "curso-101"
    assert payload["display_name"] == "Roberto"
    assert payload["role"] == "student"


def test_require_student_session_allows_anonymous_when_enabled() -> None:
    settings = make_settings(allow_anonymous_chat=True)
    claims = require_student_session(request=make_request(), credentials=None, settings=settings)
    assert claims == {"sub": "anonymous", "role": "student", "course_id": None}


def test_require_student_session_rejects_missing_credentials_when_disabled() -> None:
    settings = make_settings(allow_anonymous_chat=False)
    with pytest.raises(HTTPException) as exc_info:
        require_student_session(request=make_request(), credentials=None, settings=settings)
    assert exc_info.value.status_code == 401


def test_require_student_session_accepts_valid_token() -> None:
    settings = make_settings()
    token, _ = create_student_token("est-1", "curso-1", "Roberto", settings)
    claims = require_student_session(request=make_request(), credentials=bearer(token), settings=settings)
    assert claims["sub"] == "est-1"
    assert claims["role"] == "student"


def test_require_student_session_rejects_invalid_token() -> None:
    settings = make_settings()
    with pytest.raises(HTTPException) as exc_info:
        require_student_session(request=make_request(), credentials=bearer("garbage-token"), settings=settings)
    assert exc_info.value.status_code == 401


def test_require_student_session_rejects_wrong_role() -> None:
    settings = make_settings()
    bad_token = jwt.encode(
        {"sub": "admin-1", "role": "admin", "iss": settings.app_name},
        settings.jwt_secret,
        algorithm="HS256",
    )
    with pytest.raises(HTTPException) as exc_info:
        require_student_session(request=make_request(), credentials=bearer(bad_token), settings=settings)
    assert exc_info.value.status_code == 403
