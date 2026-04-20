# demo-vibe-open

Demo de evaluación `CSA LATAM AICM / AI-CAIQ` construida para el módulo de Vibe Coding y Prototipado con IA.

## Qué incluye

- `csa_latam_aicm_agent.html`: versión base del assessment.
- `csa_latam_aicm_agent_openai.html`: versión cliente con conexión directa a OpenAI API.
- `csa_latam_aicm_agent_backend.html`: versión recomendada para demo, usando backend local.
- `Code/aicm_agent_server.js`: proxy backend mínimo para OpenAI.
- `Code/README_aicm_agent_backend.md`: guía rápida para correr la versión segura.

## Cómo correr la versión con backend

1. Define tus variables de entorno:

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4.1-mini"
export PORT=3000
```

2. Inicia el servidor:

```bash
node Code/aicm_agent_server.js
```

3. Abre en el navegador:

```text
http://localhost:3000
```

## Nota

La versión con backend es la más segura para publicar o demoear, porque no expone la API key en el navegador.
