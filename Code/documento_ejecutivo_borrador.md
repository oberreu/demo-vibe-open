# Documento Ejecutivo

## Producto

**CSA LATAM Chapter Assessment App**  
Aplicacion para el Chapter LATAM de Cloud Security Alliance que permite evaluar controles de seguridad Cloud y de AI en una experiencia guiada, estructurada y reusable para organizaciones de la region.

## Problem Statement

Las organizaciones de LATAM que adoptan cloud e IA no cuentan con una forma simple, consistente y escalable de evaluar su cumplimiento y postura de seguridad frente a marcos actuales de CSA.  
La complejidad crece porque la evaluacion ya no debe cubrir solo controles tradicionales de seguridad cloud, sino tambien controles especificos de AI Governance, Model Security, privacidad, supply chain y riesgo operacional asociados a IA.  
El impacto es que los assessments siguen dependiendo de procesos manuales, poco comparables entre organizaciones y lentos de ejecutar, justo cuando el mercado necesita mas velocidad, trazabilidad y alineamiento con estandares formales.

## Evidencia

- El archivo `AICMv1.0.3-generated_at_2025_11_10.xlsx` contiene **243 controles distribuidos en 18 dominios**, lo que evidencia la magnitud real del framework que una organizacion debe interpretar para evaluar AI Security de manera estructurada.
- El bundle asociado incluye `AI_CAIQv1.0.2`, un cuestionario formal alineado con AICM, lo que demuestra que CSA ya dispone de una base concreta para convertir controles en preguntas evaluables y comparables.

## Target

- Rol principal: lideres de seguridad, GRC, compliance, arquitectura, riesgo tecnologico y responsables de programas de IA.
- Rol secundario: consultores, evaluadores y miembros del ecosistema CSA LATAM que necesiten ejecutar assessments de manera repetible.
- Tipo de organizacion: empresas medianas y grandes, entidades reguladas, equipos de auditoria y organizaciones que operan workloads cloud y casos de uso de IA.
- Geografia inicial: Chapter LATAM, con foco practico en organizaciones de Chile, Colombia, Peru y otros paises de la region.
- Caracteristicas clave: necesidad de diagnostico rapido, alineamiento con frameworks CSA, evidencia trazable y capacidad de priorizar remediacion.

## Economia

- Costo actual: los assessments de controles cloud y AI suelen requerir levantamiento manual, lectura experta del framework, entrevistas y consolidacion posterior en planillas o informes.
- Tiempo perdido: horas o semanas en interpretar controles, traducirlos a preguntas, capturar evidencia, calcular resultados y preparar una salida ejecutiva utilizable.
- Impacto: menor velocidad de adopcion del framework, baja repetibilidad entre evaluadores, dificultad para escalar el uso del standard dentro del ecosistema CSA LATAM y menor capacidad para transformar controles en accion concreta.

## Solucion Propuesta

La propuesta es desarrollar una app para el Chapter LATAM de CSA que convierta los marcos de control en una experiencia de evaluacion navegable, comprensible y accionable. La app tomara como base los controles de seguridad existentes y los controles de AI del AICM v1.0.3, utilizando la estructura del AI-CAIQ v1.0.2 para guiar el assessment, registrar respuestas, asociar ownership y consolidar evidencia. El resultado sera una experiencia capaz de recorrer dominios, evaluar madurez o cumplimiento por control, visualizar scores y brechas, y generar una priorizacion de hallazgos para acelerar conversaciones de seguridad, gobierno y remediacion en organizaciones de LATAM.

## Alcance Funcional Del Scope Actualizado

- Cobertura de controles de seguridad cloud existentes y controles de AI.
- Inclusion explicita del framework **AICM v1.0.3** con sus **243 controles** en **18 dominios**.
- Uso del **AI-CAIQ v1.0.2** como base para preguntas de assessment y captura estructurada de respuestas.
- Visualizacion por dominio, control, estado de cumplimiento, hallazgos y prioridades.
- Salida ejecutiva orientada a decision: resumen, brechas criticas y recomendaciones de remediacion.

## Dominios AICM Considerados

- Audit & Assurance
- Application & Interface Security
- Business Continuity Management and Operational Resilience
- Change Control and Configuration Management
- Cryptography, Encryption & Key Management
- Datacenter Security
- Data Security and Privacy Lifecycle Management
- Governance, Risk and Compliance
- Human Resources
- Identity & Access Management
- Interoperability & Portability
- Infrastructure Security
- Logging and Monitoring
- Model Security
- Security Incident Management, E-Discovery, & Cloud Forensics
- Supply Chain Management, Transparency, and Accountability
- Threat & Vulnerability Management
- Universal Endpoint Management

## Criterios de Exito

- Permitir ejecutar un assessment navegable y entendible sobre controles cloud y AI sin depender de interpretacion manual completa del framework.
- Mostrar cobertura y resultado por dominio y por control con datos realistas.
- Reducir significativamente el tiempo de preparacion y ejecucion del assessment frente a un proceso manual basado solo en documentos y planillas.
- Entregar una vista accionable con hallazgos priorizados y siguientes pasos de remediacion.
- Comunicar con claridad el valor de CSA LATAM como habilitador practico de adopcion de estandares de seguridad y AI Governance en la region.

## Por Que Ahora

La publicacion del AICM v1.0.3 y de AI-CAIQ v1.0.2 crea una oportunidad concreta para transformar un framework complejo en una app util para el ecosistema LATAM. El mercado regional necesita herramientas que acerquen los estandares a la operacion diaria, especialmente en un momento donde AI Governance, Model Security y cumplimiento regulatorio pasan desde la teoria a la implementacion real.

## Fuera de Scope

- No busca automatizar auditorias formales end-to-end ni reemplazar el juicio experto de evaluadores, auditores o consultores.
- No incluye en esta fase integraciones profundas con sistemas corporativos productivos para recolectar evidencia automaticamente.
- No pretende cubrir toda la experiencia de remediacion; el foco inicial es evaluacion, visualizacion de resultados y priorizacion.

## Implicancias Para El Prototipo

El prototipo deberia comunicar al menos estas tres capacidades:

1. Una pantalla de evaluacion guiada donde el usuario responde preguntas derivadas de AI-CAIQ y navega controles por dominio.
2. Un dashboard de resultados con score por dominio, cobertura, brechas y hallazgos criticos.
3. Una vista ejecutiva con resumen, prioridades y recomendaciones para toma de decision.
