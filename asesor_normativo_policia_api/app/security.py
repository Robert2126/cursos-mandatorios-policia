from datetime import datetime, timedelta, timezone
from typing import Annotated

import jwt
from fastapi import Depends, Header, HTTPException, Request, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.config import Settings, get_settings

bearer_scheme = HTTPBearer(auto_error=False)


def _constant_time_equal(left: str, right: str) -> bool:
    import hmac

    return hmac.compare_digest(left.encode("utf-8"), right.encode("utf-8"))


def require_admin_key(
    x_admin_key: Annotated[str | None, Header()] = None,
    settings: Settings = Depends(get_settings),
) -> None:
    if not x_admin_key or not _constant_time_equal(x_admin_key, settings.admin_api_key):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Clave administrativa inválida")


def require_integration_key(
    x_integration_key: Annotated[str | None, Header()] = None,
    settings: Settings = Depends(get_settings),
) -> None:
    if not x_integration_key or not _constant_time_equal(x_integration_key, settings.integration_api_key):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Clave de integración inválida")


def create_student_token(student_id: str, course_id: str | None, display_name: str | None, settings: Settings) -> tuple[str, int]:
    now = datetime.now(timezone.utc)
    expires = now + timedelta(minutes=settings.jwt_ttl_minutes)
    payload = {
        "sub": student_id,
        "course_id": course_id,
        "display_name": display_name,
        "role": "student",
        "iat": int(now.timestamp()),
        "exp": int(expires.timestamp()),
        "iss": settings.app_name,
    }
    token = jwt.encode(payload, settings.jwt_secret, algorithm="HS256")
    return token, settings.jwt_ttl_minutes * 60


def require_student_session(
    request: Request,
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
    settings: Settings = Depends(get_settings),
) -> dict:
    if settings.allow_anonymous_chat and credentials is None:
        return {"sub": "anonymous", "role": "student", "course_id": None}
    if credentials is None or credentials.scheme.lower() != "bearer":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Se requiere token de sesión")
    try:
        payload = jwt.decode(
            credentials.credentials,
            settings.jwt_secret,
            algorithms=["HS256"],
            issuer=settings.app_name,
        )
    except jwt.PyJWTError as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token inválido o vencido") from exc
    if payload.get("role") != "student":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Rol no autorizado")
    request.state.student = payload
    return payload
