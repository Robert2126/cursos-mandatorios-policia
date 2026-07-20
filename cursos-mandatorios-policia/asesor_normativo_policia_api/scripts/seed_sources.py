import json
import os
from pathlib import Path

import httpx


def main() -> None:
    base_url = os.environ.get("ADVISOR_BASE_URL", "http://localhost:8000").rstrip("/")
    admin_key = os.environ.get("ADMIN_API_KEY")
    if not admin_key:
        raise SystemExit("Defina ADMIN_API_KEY antes de ejecutar el script")
    sources = json.loads((Path(__file__).with_name("official_sources.json")).read_text(encoding="utf-8"))
    with httpx.Client(timeout=120) as client:
        for source in sources:
            response = client.post(
                f"{base_url}/api/v1/admin/sources/url",
                headers={"X-Admin-Key": admin_key},
                json=source,
            )
            print(source["title"], response.status_code, response.text[:300])


if __name__ == "__main__":
    main()
