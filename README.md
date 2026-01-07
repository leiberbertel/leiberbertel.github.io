# Leiber Bertel | Portafolio

Portafolio personal migrado de HTML/CSS/JS plano a Angular 19 con componentes standalone. Incluye traducciones, modo oscuro, carruseles y formulario de contacto operativo.

## Requisitos
- Node.js 20+ y npm
- Angular CLI 19 (opcional instalar de forma global con `npm i -g @angular/cli`)

## Puesta en marcha
1. cd leiber-bertel-web
2. npm install
3. npm start
4. Abrir http://localhost:4200

## Scripts disponibles
- npm start: levanta el entorno de desarrollo con recarga en caliente.
- npm run build: genera la build de produccion en `dist/`.
- npm test: ejecuta las pruebas unitarias de Angular.
- npm run watch: build incremental para desarrollo.

## Funcionalidades clave
- Navegacion responsive con menu hamburguesa, sombreado al hacer scroll y boton de volver arriba.
- Selector de idioma (es/en/pt) y tema claro/oscuro persistentes en localStorage, gestionados por `src/app/core/services/i18n.service.ts`.
- Secciones de contenido: hero, about, skills (acordeon), qualification (linea de tiempo), services, testimonials, portfolio y contacto.
- Carrusel de proyectos nativo en `src/app/features/portfolio/portfolio.component.ts` (flechas, paginacion y loop).
- Formulario de contacto reactivo con validaciones, envio via Formspree (`https://formspree.io/f/mzbqzaad`) y alertas con SweetAlert2.
- Recursos estaticos en `public/assets` (imagenes, PDF del CV y traducciones en `public/assets/i18n/*.json`).

## Estructura
- `src/app/app.component.ts`: punto de entrada que orquesta datos, tema y lenguaje, y pasa props a cada sección.
- `src/app/features/*`: componentes standalone por sección (nav, hero, about, skills, qualification, services, testimonials, portfolio, contact, footer).
- `src/styles.css`: estilos globales y tokens de diseño.
- `public/assets`: imagenes, documentos y archivos de traducción.

## Notas de despliegue
- La salida de produccion queda en `leiber-bertel-web/dist/` tras ejecutar `npm run build`.
- Si agregas o cambias textos, actualiza las cuatro traducciones en `public/assets/i18n/`.
