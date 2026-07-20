# Asesor Normativo Policial API

API y cliente web de referencia para incorporar un asesor académico en una plataforma de cursos mandatorios. La solución responde preguntas con fundamento en un corpus documental autorizado; no realiza seguimiento de avance, calificaciones ni cumplimiento.

## Qué hace

- Recibe preguntas abiertas del estudiante.
- Busca fragmentos pertinentes en leyes, reglamentos, procedimientos, manuales y jurisprudencia incorporados por un administrador.
- Genera una explicación pedagógica con respuesta directa, fundamento, condiciones, procedimiento paso a paso, forma de actuar, riesgos, formatos y aspectos por verificar.
- Devuelve las fuentes recuperadas, página o artículo cuando fue posible identificarlos, extracto y nivel de similitud.
- Declara insuficiencia documental cuando el corpus no respalda una respuesta.
- Proporciona un cliente web básico y una API REST para integrarla al LMS.

## Principio de funcionamiento

La API utiliza RAG (generación aumentada por recuperación):

1. El administrador incorpora documentos oficiales.
2. El sistema divide y vectoriza su contenido.
3. Ante una pregunta, recupera los fragmentos más relacionados.
4. El modelo recibe exclusivamente esos fragmentos como fundamento.
5. La respuesta debe citar etiquetas como `[F1]`, `[F2]`.

## Instalación

```bash
cp .env.example .env
# Configure OPENAI_API_KEY y cambie todas las claves predeterminadas.
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

- Cliente: `http://localhost:8000/`
- Swagger: `http://localhost:8000/docs`
- Salud: `http://localhost:8000/health`

## Incorporar una fuente por archivo

```bash
curl -X POST http://localhost:8000/api/v1/admin/sources/upload \
  -H "X-Admin-Key: SU_CLAVE_ADMIN" \
  -F "file=@norma.pdf" \
  -F "title=Nombre oficial de la norma" \
  -F "source_type=ley" \
  -F "effective_date=2026-07-18"
```

Formatos admitidos: PDF con texto, DOCX, TXT, Markdown y HTML. Los PDF escaneados requieren OCR previo.

## Incorporar una fuente oficial por URL

```bash
curl -X POST http://localhost:8000/api/v1/admin/sources/url \
  -H "X-Admin-Key: SU_CLAVE_ADMIN" \
  -H "Content-Type: application/json" \
  -d '{
    "url":"https://www.suin-juriscol.gov.co/viewDocument.asp?id=30021736",
    "title":"Ley 1801 de 2016",
    "source_type":"ley"
  }'
```

Solo se aceptan dominios de la lista `ALLOWED_SOURCE_DOMAINS`. Para documentos internos es preferible la carga controlada de archivos.

## Integración segura con el LMS

El backend de la plataforma solicita un token temporal. La clave de integración nunca debe enviarse al navegador.

```bash
curl -X POST http://localhost:8000/api/v1/session-token \
  -H "X-Integration-Key: SU_CLAVE_INTEGRACION" \
  -H "Content-Type: application/json" \
  -d '{"student_id":"123456","course_id":"CURSO-001"}'
```

Después, el navegador o backend consulta:

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Authorization: Bearer TOKEN_TEMPORAL" \
  -H "Content-Type: application/json" \
  -d '{
    "question":"¿Cuál es el procedimiento aplicable en una captura en flagrancia?",
    "course_id":"CURSO-001"
  }'
```

En desarrollo, `ALLOW_ANONYMOUS_CHAT=true` permite probar el cliente sin token. Debe quedar en `false` en producción.

## Inserción en una página del curso

La opción más simple es publicar el asesor en un dominio institucional e incorporarlo mediante un `iframe`. El backend del LMS obtiene el token temporal y la página lo entrega al `iframe` con `postMessage`; la clave de integración permanece exclusivamente en el servidor.

```html
<iframe
  id="asesor-policial"
  src="https://asesor.institucion.gov/"
  title="Asesor Normativo Policial"
  style="width:100%;min-height:720px;border:0"
></iframe>
<script>
  const tokenTemporal = "TOKEN_GENERADO_POR_EL_BACKEND";
  const asesor = document.getElementById("asesor-policial");
  asesor.addEventListener("load", () => {
    asesor.contentWindow.postMessage(
      { type: "advisor-token", token: tokenTemporal },
      "https://asesor.institucion.gov"
    );
  });
</script>
```

En producción deben configurarse encabezados de seguridad, restricción de `frame-ancestors`, autenticación institucional y orígenes permitidos.

## Respuesta de la API

```json
{
  "answer": "... [F1]",
  "confidence": "media",
  "supported": true,
  "citations": [
    {
      "label": "F1",
      "title": "Ley 906 de 2004",
      "url": "https://...",
      "page": 42,
      "article": "301",
      "excerpt": "...",
      "similarity": 0.61
    }
  ],
  "limitations": [],
  "generated_at": "2026-07-18T18:00:00Z"
}
```

## Reglas de gobernanza necesarias

Antes del despliegue institucional deben definirse responsables para:

- aprobar y actualizar el corpus;
- confirmar vigencia, derogatorias y modificaciones;
- clasificar documentos reservados o de circulación restringida;
- evaluar respuestas sobre uso de la fuerza, capturas, registros, cadena de custodia, policía judicial y derechos fundamentales;
- establecer trazabilidad, retención de registros y tratamiento de datos personales;
- integrar autenticación institucional, SSO, VPN, WAF, monitoreo y gestión de incidentes.

## Límites

- No sustituye la orden legítima del mando, la asesoría jurídica, el procedimiento institucional vigente ni la valoración concreta de una autoridad competente.
- La precisión depende del corpus incorporado y de su actualización.
- La detección de artículos es heurística; debe verificarse contra la fuente original.
- SQLite funciona para prototipo o carga moderada. Para producción de gran escala conviene migrar el almacén vectorial a PostgreSQL con pgvector u otra solución institucional.
