# Leiber Bertel | Portfolio

Personal portfolio migrated from plain HTML/CSS/JS to Angular 19 with standalone components. Includes translations, dark mode, carousels, and a functional contact form.

## Requirements
- Node.js 20+ and npm
- Angular CLI 19 (optionally install globally with `npm i -g @angular/cli`)

## Getting Started
1. cd leiber-bertel-web
2. npm install
3. npm start
4. Open http://localhost:4200

## Available Scripts
- npm start: starts the development environment with hot reload.
- npm run build: generates the production build in `dist/`.
- npm test: runs Angular unit tests.
- npm run watch: incremental build for development.

## Key Features
- Responsive navigation with hamburger menu, scroll shadow, and back-to-top button.
- Language selector (es/en/pt) and light/dark theme persistent in localStorage, managed by `src/app/core/services/i18n.service.ts`.
- Content sections: hero, about, skills (accordion), qualification (timeline), services, testimonials, portfolio, and contact.
- Native projects carousel in `src/app/features/portfolio/portfolio.component.ts` (arrows, pagination, and loop).
- Reactive contact form with validations, submission via Formspree (`https://formspree.io/f/mzbqzaad`), and alerts with SweetAlert2.
- Static resources in `public/assets` (images, PDF CV, and translations in `public/assets/i18n/*.json`).

## Structure
- `src/app/app.component.ts`: entry point that orchestrates data, theme, and language, and passes props to each section.
- `src/app/features/*`: standalone components per section (nav, hero, about, skills, qualification, services, testimonials, portfolio, contact, footer).
- `src/styles.css`: global styles and design tokens.
- `public/assets`: images, documents, and translation files.

## Deployment Notes
- The production output is located in `leiber-bertel-web/dist/` after running `npm run build`.
- If you add or change text, update the four translations in `public/assets/i18n/`.
