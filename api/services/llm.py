from google import genai
from google.genai import types

from api.config import Settings


class LLMService:
    def __init__(self, settings: Settings):
        self.client = None
        self.model = settings.gemini_model
        if settings.gemini_api_key:
            self.client = genai.Client(api_key=settings.gemini_api_key)

    async def answer(self, instructions: str, prompt: str) -> str:
        if not self.client:
            # Modo Simulación Local (Offline / Sin Clave API)
            prompt_lower = prompt.lower()
            if "captura" in prompt_lower or "flagrancia" in prompt_lower:
                return (
                    "**[Simulador IA - Offline]**\n\n"
                    "👮 **Procedimiento de Captura en Flagrancia (Artículos 301, 302 y 303 del Código de Procedimiento Penal):**\n\n"
                    "• **Argumentación Procedimental:**\n"
                    "  1. **Uso Proporcional de la Fuerza (Res. 02903/17):** Reducción del infractor aplicando el modelo de triangulación.\n"
                    "  2. **Registro Corporal (Art. 159 - Ley 1801):** Confiscación inmediata de elementos materiales probatorios.\n"
                    "  3. **Lectura de Derechos (Art. 303 CPP):** Lectura del acta de derechos de forma inmediata.\n"
                    "  4. **Puesta a Disposición:** Conducir ante el Fiscal de la URI de forma inmediata para el control de legalidad dentro de las 36 horas.\n\n"
                    "• **Fundamento Normativo:**\n"
                    "  Cita la Constitución Política (Derecho a la libertad) y el Artículo 303 de la Ley 906 de 2004 [F1]."
                )
            elif "1801" in prompt_lower or "convivencia" in prompt_lower or "comparendo" in prompt_lower:
                return (
                    "**[Simulador IA - Offline]**\n\n"
                    "📜 **Procedimientos de Convivencia y Medidas Correctivas (Ley 1801 de 2016):**\n\n"
                    "• **Argumentación Doctrinal:**\n"
                    "  1. **Mediación Policial (Art. 154):** Diálogo como primer recurso formal para resolver disputas ciudadanas.\n"
                    "  2. **Orden de Policía (Art. 150):** Mandato de carácter preventivo.\n"
                    "  3. **Medidas Correctivas (Art. 172):** Aplicación de comparendo (Multas generales) si persiste el comportamiento.\n\n"
                    "• **Garantías Legales:**\n"
                    "  El ciudadano puede apelar ante el Inspector de Policía dentro de los 3 días hábiles [F2]."
                )
            else:
                return (
                    "**[Simulador IA - Offline]**\n\n"
                    "Asesor Normativo Policial listo en modo de simulación. Por favor formula una pregunta operativa sobre "
                    "Código de Convivencia (1801), Flagrancia (906) o Uso de la Fuerza (Res. 02903)."
                )

        response = await self.client.aio.models.generate_content(
            model=self.model,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=instructions,
            )
        )
        return response.text.strip()
