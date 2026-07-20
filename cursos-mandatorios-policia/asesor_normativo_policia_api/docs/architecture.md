# Arquitectura

```text
Página LMS -> backend institucional -> token temporal -> POST /api/v1/chat
                                                   |
                                                   v
                                  búsqueda semántica en corpus autorizado
                                                   |
                                                   v
                                  modelo genera respuesta con citas [F1]
```

## Controles esenciales

- El navegador no debe contener claves administrativas ni de integración.
- El backend del LMS solicita tokens temporales para cada estudiante.
- El corpus debe ser administrado por responsables designados y conservar metadatos de vigencia.
- Las fuentes derogadas o sustituidas deben retirarse o marcarse de forma inequívoca.
- Las respuestas deben auditarse antes de habilitar temas críticos.
