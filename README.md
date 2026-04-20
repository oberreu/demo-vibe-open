# demo-vibe-open

Demo interactiva para evaluación de controles `CSA AICM / AI-CAIQ`, orientada al Chapter LATAM de Cloud Security Alliance.

La aplicación permite recorrer dominios de seguridad, responder preguntas de assessment y usar un agente contextual para explicar controles, evidencia esperada, brechas comunes y siguientes pasos de implementación.

## Demo hub

- `index.html`
  Landing principal del proyecto con acceso a las 3 variantes de la demo.

## Versiones incluidas

- `csa_latam_aicm_agent.html`
  Versión base del assessment.
- `csa_latam_aicm_agent_openai.html`
  Variante experimental con conexión directa a OpenAI API desde el navegador.
- `csa_latam_aicm_agent_backend.html`
  Versión recomendada para demos públicas, porque usa guía local por control y no depende de API externa.
- `Code/aicm_agent_server.js`
  Backend mínimo heredado del prototipo técnico inicial.

## Inicio rápido

Para ver la versión pública recomendada, abre:

```text
https://oberreu.github.io/demo-vibe-open/
```

Esa landing enlaza a la demo principal con guía local por control.

## Variante técnica con backend

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

Para demos públicas o compartidas, usa `csa_latam_aicm_agent_backend.html`. Esa versión hoy funciona con recomendaciones locales por control y por dominio, lo que la vuelve más estable para presentación y grabación de video.
