# demo-vibe-open

Prototipo open source impulsado por `CSA LATAM Chapter` para evaluar postura de seguridad en `Cloud + IA` a partir del `CSA AI Controls Matrix (AICM) v1.0.3` y una experiencia de evaluación más accesible, basada en evidencia y escalable para LATAM.

La aplicación permite recorrer dominios de seguridad, responder preguntas de evaluación y usar un agente contextual para explicar controles, evidencia esperada, brechas comunes, señales de gestión de postura y siguientes pasos de implementación.

## Scope actual del prototipo

### Problem statement

Los líderes de `GRC`, seguridad, riesgo y arquitectura de `IA/Cloud` en organizaciones medianas y grandes de LATAM están adoptando casos de uso de inteligencia artificial más rápido de lo que pueden gobernarlos. Aunque existen frameworks como `CSA CCM` y `AICM v1.0.3`, su aplicación sigue siendo manual, fragmentada, costosa y altamente dependiente de expertos.

El problema no es solo interpretar controles nuevos, como los asociados a `Model Security`, sino convertir esos estándares en una práctica operativa, repetible y trazable para auditoría, cumplimiento y toma de decisiones de riesgo.

### Qué resuelve este prototipo hoy

El prototipo transforma el `AICM v1.0.3` en una experiencia de evaluación guiada, navegable y en español para:

- estructurar la evaluación en `18 dominios`
- capturar respuestas por control
- explicar controles con un agente contextual
- mostrar scoring global y por dominio
- generar hallazgos, recomendaciones y narrativa ejecutiva
- introducir el concepto de evaluación basada en evidencia, gestión de postura y correlación entre respuesta humana, señales cloud y evidencia documental

### Hacia dónde queremos llegar

La dirección objetivo del producto es evolucionar desde una `autoevaluación guiada` hacia una plataforma de `aseguramiento continuo en Cloud + IA`, capaz de:

- analizar evidencia documental por control
- conectarse al tenant o suscripción cloud
- consumir señales desde `CSPM`, `CNAPP` y `AI-SPM`
- contrastar postura declarada versus postura evidenciada
- clasificar cumplimiento como `validado`, `parcial` o `en contradicción`
- reducir la evaluación desde semanas a horas
- habilitar evaluaciones repetibles, comparables y escalables dentro del ecosistema `CSA LATAM`

### Lo que está fuera de scope en esta fase

- no reemplaza auditorías formales ni certificaciones
- no ejecuta aún integración real automática con sistemas corporativos para recolectar evidencia
- no cubre todavía la experiencia completa de remediación
- no implementa aseguramiento continuo real; hoy comunica y prototipa esa dirección

## Centro de demos

- `index.html`
  Landing principal del proyecto con acceso a las 3 variantes de la demo.

## Versiones incluidas

- `csa_latam_aicm_agent.html`
  Versión base de la evaluación.
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

Para demos públicas o compartidas, usa `csa_latam_aicm_agent_backend.html`. Esa versión hoy funciona con recomendaciones locales por control y por dominio, lo que la vuelve más estable para presentación y grabación de video, y además comunica la dirección futura del producto hacia evaluaciones basadas en evidencia y aseguramiento continuo.
