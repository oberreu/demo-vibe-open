# CSA LATAM AICM Agent Backend

## Qué incluye

- `aicm_agent_server.js`: backend mínimo en Node.js sin dependencias externas.
- `../csa_latam_aicm_agent_backend.html`: frontend que consume el backend local.
- `.env.example`: variables necesarias para OpenAI.

## Cómo usarlo

1. Exporta tu clave de OpenAI:

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4.1-mini"
export PORT=3000
```

2. Levanta el servidor:

```bash
node Code/aicm_agent_server.js
```

3. Abre en tu navegador:

```text
http://localhost:3000
```

## Endpoints

- `GET /api/health`: verifica si el backend está listo.
- `POST /api/agent`: proxy seguro hacia OpenAI Responses API.

## Ventaja de esta versión

La API key ya no vive en el navegador ni en el HTML. El frontend solo conversa con el backend local, y el backend firma la llamada a OpenAI usando variables de entorno.
