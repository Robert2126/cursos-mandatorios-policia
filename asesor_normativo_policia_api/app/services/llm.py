from openai import AsyncOpenAI

from app.config import Settings


class LLMService:
    def __init__(self, settings: Settings):
        if not settings.openai_api_key:
            raise RuntimeError("OPENAI_API_KEY no está configurada")
        self.client = AsyncOpenAI(api_key=settings.openai_api_key)
        self.model = settings.openai_model

    async def answer(self, instructions: str, prompt: str) -> str:
        response = await self.client.responses.create(
            model=self.model,
            instructions=instructions,
            input=prompt,
            store=False,
        )
        return response.output_text.strip()
