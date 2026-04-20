# demo-vibe-open

Demo interactiva para evaluación de controles `CSA AICM / AI-CAIQ`, orientada al Chapter LATAM de Cloud Security Alliance.

La aplicación permite recorrer dominios de seguridad, responder preguntas de assessment y usar un agente IA contextual para explicar controles, evidencia esperada, brechas comunes y siguientes pasos de implementación.

## Versiones incluidas

- `csa_latam_aicm_agent.html`
  Versión base del assessment.
- `csa_latam_aicm_agent_openai.html`
  Versión cliente con conexión directa a OpenAI API desde el navegador.
- `csa_latam_aicm_agent_backend.html`
  Versión recomendada para publicar demos, porque usa un backend local y no expone la API key.
- `Code/aicm_agent_server.js`
  Proxy backend mínimo hacia OpenAI Responses API.

## Inicio rápido

1. Configura variables de entorno:

```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4.1-mini"
export PORT=3000
```

2. Levanta el servidor:

```bash
node Code/aicm_agent_server.js
```

3. Abre la app:

```text
http://localhost:3000
```

## Estructura del repo

```text
.
├── csa_latam_aicm_agent.html
├── csa_latam_aicm_agent_openai.html
├── csa_latam_aicm_agent_backend.html
└── Code/
    ├── aicm_agent_server.js
    ├── .env.example
    └── README_aicm_agent_backend.md
```

## Recomendación

Para demos públicas o compartidas, usa `csa_latam_aicm_agent_backend.html`. Esa versión mantiene la API key fuera del navegador y deja el agente más listo para un entorno real.
