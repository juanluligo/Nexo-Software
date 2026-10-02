# Nexo — Agencia de Software Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una landing responsive de Nexo en React, respaldada por una API Express separada para contenido y contacto.

**Architecture:** El backend expondrá contenido tipado y validará solicitudes de contacto mediante capas de rutas, controladores, servicios y repositorios en memoria. El frontend consumirá ese contrato desde un cliente HTTP aislado y compondrá la UI del mockup con secciones reutilizables, tokens CSS y estado local mínimo.

**Tech Stack:** React, Vite, TypeScript, CSS, Node.js, Express, Vitest, Supertest y React Testing Library.

**Spec:** `docs/superpowers/specs/2026-10-02-nexo-agencia-software-design.md`

## Global Constraints

- El frontend y el backend deben ejecutarse por separado.
- El frontend usará React con Vite y TypeScript.
- El backend usará Node.js, Express y TypeScript.
- Las rutas estarán versionadas bajo `/api`.
- Los datos iniciales vivirán en memoria mediante repositorios simples.
- Cada componente tendrá una responsabilidad única.
- La lógica de red no vivirá dentro de componentes visuales.
- Se priorizará HTML semántico y controles accesibles.
- No se agregarán dependencias si una solución nativa y legible es suficiente.
- No se realizarán operaciones de Git ni GitHub durante la implementación.

## Review Focus

1. Un payload de contacto con espacios en blanco debe rechazarse como inválido; se prueba en `backend/src/services/contactService.test.ts`.
2. Un correo con formato inválido debe producir `400` y errores por campo; se prueba en `backend/src/routes/contactRoutes.test.ts`.
3. Un fallo del backend al cargar contenido debe mostrar un estado de error visible sin romper la navegación; se prueba en `frontend/src/App.test.tsx`.
4. El formulario debe deshabilitar el envío mientras espera y mostrar confirmación después de `201`; se prueba en `frontend/src/components/ContactForm.test.tsx`.
5. La navegación móvil debe abrir y cerrar el menú con teclado y atributos accesibles; se prueba en `frontend/src/components/Navbar.test.tsx`.

## File Map

### Workspace

- Create: `package.json` — scripts raíz para instalar, ejecutar y verificar ambos proyectos sin mezclar sus responsabilidades.
- Create: `README.md` — instrucciones locales y variables de entorno.

### Backend

- Create: `backend/package.json`, `backend/tsconfig.json`, `backend/vitest.config.ts` — configuración aislada.
- Create: `backend/src/types/content.ts` — contratos `Project`, `Service`, `ProcessStep` y `SiteContent`.
- Create: `backend/src/types/contact.ts` — `ContactRequest` y resultado de validación.
- Create: `backend/src/repositories/contentRepository.ts` — contenido inicial in-memory.
- Create: `backend/src/repositories/contactRepository.ts` — almacenamiento temporal de solicitudes aceptadas.
- Create: `backend/src/services/contentService.ts` — lectura de contenido.
- Create: `backend/src/services/contactService.ts` — validación y registro de contactos.
- Create: `backend/src/controllers/contentController.ts` — respuesta de contenido.
- Create: `backend/src/controllers/contactController.ts` — respuesta de contacto.
- Create: `backend/src/routes/contentRoutes.ts`, `backend/src/routes/contactRoutes.ts` — endpoints bajo `/api`.
- Create: `backend/src/app.ts` — Express, CORS, JSON, rutas y errores.
- Create: `backend/src/server.ts` — arranque HTTP.
- Create: `backend/src/services/contactService.test.ts`, `backend/src/routes/contentRoutes.test.ts`, `backend/src/routes/contactRoutes.test.ts` — pruebas backend.

### Frontend

- Create: `frontend/package.json`, `frontend/tsconfig.json`, `frontend/vite.config.ts`, `frontend/index.html` — configuración React.
- Create: `frontend/src/types/content.ts`, `frontend/src/types/contact.ts` — contratos compartidos adaptados al cliente.
- Create: `frontend/src/services/apiClient.ts` — `getSiteContent()` y `submitContact()`.
- Create: `frontend/src/styles/tokens.css`, `frontend/src/styles/globals.css` — tokens visuales, reset y responsive base.
- Create: `frontend/src/components/Navbar.tsx`, `frontend/src/components/Navbar.test.tsx` — navegación responsive.
- Create: `frontend/src/components/SectionHeading.tsx` — encabezado de sección reutilizable.
- Create: `frontend/src/components/ContactForm.tsx`, `frontend/src/components/ContactForm.test.tsx` — formulario accesible.
- Create: `frontend/src/sections/HeroSection.tsx` — hero y panel de operación.
- Create: `frontend/src/sections/BuiltProjectsSection.tsx` — proyectos construidos.
- Create: `frontend/src/sections/ServicesSection.tsx` — servicios.
- Create: `frontend/src/sections/TechnologyApproach.tsx` — propuesta tecnológica.
- Create: `frontend/src/sections/ProjectsSection.tsx` — casos destacados.
- Create: `frontend/src/sections/ProcessSection.tsx` — proceso de cuatro pasos.
- Create: `frontend/src/sections/FinalCta.tsx` — CTA final.
- Create: `frontend/src/sections/Footer.tsx` — pie de página.
- Create: `frontend/src/App.tsx`, `frontend/src/App.test.tsx`, `frontend/src/main.tsx` — composición y arranque.

## Tasks

### Task 1: Scaffold de workspace y contratos base

**Files:**
- Create: `package.json`, `README.md`
- Create: `backend/package.json`, `backend/tsconfig.json`, `backend/vitest.config.ts`
- Create: `frontend/package.json`, `frontend/tsconfig.json`, `frontend/vite.config.ts`, `frontend/index.html`
- Create: `backend/src/types/content.ts`, `backend/src/types/contact.ts`
- Create: `frontend/src/types/content.ts`, `frontend/src/types/contact.ts`

**Interfaces:**
- Produces `SiteContent`, `Project`, `Service`, `ProcessStep` y `ContactRequest` para todas las tareas posteriores.

- [ ] **Step 1: Escribir un test de compilación de contratos** que importe los tipos y construya un `SiteContent` mínimo válido.
- [ ] **Step 2: Ejecutar la verificación de tipos** con `npm run typecheck --workspace backend` y `npm run typecheck --workspace frontend`; debe fallar antes de existir la configuración.
- [ ] **Step 3: Crear las configuraciones y tipos** con scripts raíz `dev`, `test`, `build` y `typecheck`, sin lógica de aplicación todavía.
- [ ] **Step 4: Ejecutar typecheck y tests de contratos**; debe terminar sin errores.

### Task 2: API de contenido y contacto

**Files:**
- Create: `backend/src/repositories/contentRepository.ts`
- Create: `backend/src/repositories/contactRepository.ts`
- Create: `backend/src/services/contentService.ts`
- Create: `backend/src/services/contactService.ts`
- Create: `backend/src/controllers/contentController.ts`
- Create: `backend/src/controllers/contactController.ts`
- Create: `backend/src/routes/contentRoutes.ts`
- Create: `backend/src/routes/contactRoutes.ts`
- Create: `backend/src/app.ts`, `backend/src/server.ts`
- Test: `backend/src/services/contactService.test.ts`, `backend/src/routes/contentRoutes.test.ts`, `backend/src/routes/contactRoutes.test.ts`

**Interfaces:**
- Produces `GET /api/content` con `SiteContent`.
- Produces `POST /api/contact` con `ContactRequest`, `201` para datos válidos y `400` para errores de validación.
- `createApp(): Express` será la entrada usada por Supertest y por `server.ts`.

- [ ] **Step 1: Escribir tests fallidos** para contenido, contacto válido, nombre vacío, mensaje en blanco y email inválido.
- [ ] **Step 2: Ejecutar `npm test --workspace backend`** y confirmar fallos por rutas/servicios inexistentes.
- [ ] **Step 3: Implementar repositorios, servicios, controladores, rutas y `createApp()`** con respuestas JSON consistentes y CORS configurable por `FRONTEND_ORIGIN`.
- [ ] **Step 4: Ejecutar `npm test --workspace backend`**; todos los tests deben pasar.
- [ ] **Step 5: Ejecutar `npm run build --workspace backend`**; TypeScript debe compilar sin errores.

### Task 3: Sistema visual y componentes estructurales del frontend

**Files:**
- Create: `frontend/src/styles/tokens.css`, `frontend/src/styles/globals.css`
- Create: `frontend/src/components/Navbar.tsx`, `frontend/src/components/Navbar.test.tsx`
- Create: `frontend/src/components/SectionHeading.tsx`
- Create: `frontend/src/sections/HeroSection.tsx`
- Create: `frontend/src/sections/BuiltProjectsSection.tsx`
- Create: `frontend/src/sections/ServicesSection.tsx`
- Create: `frontend/src/sections/TechnologyApproach.tsx`
- Create: `frontend/src/sections/ProjectsSection.tsx`
- Create: `frontend/src/sections/ProcessSection.tsx`
- Create: `frontend/src/sections/FinalCta.tsx`
- Create: `frontend/src/sections/Footer.tsx`

**Interfaces:**
- `Navbar` recibe `onContactClick?: () => void` y administra `aria-expanded` para el menú móvil.
- Cada sección recibe únicamente los datos de su tipo y emite HTML semántico.

- [ ] **Step 1: Escribir el test fallido de `Navbar`** para enlaces, apertura/cierre móvil y navegación por teclado.
- [ ] **Step 2: Ejecutar `npm test --workspace frontend -- Navbar.test.tsx`** y confirmar el fallo por componentes inexistentes.
- [ ] **Step 3: Implementar tokens y componentes** respetando la referencia: crema, azul oscuro, azul destacado, verde suave, tarjetas redondeadas, composición vertical y responsive.
- [ ] **Step 4: Ejecutar el test de Navbar y el typecheck del frontend**; ambos deben pasar.
- [ ] **Step 5: Ejecutar `npm run build --workspace frontend`**; Vite debe producir el bundle.

### Task 4: Integración de datos y formulario de contacto

**Files:**
- Create: `frontend/src/services/apiClient.ts`
- Create: `frontend/src/components/ContactForm.tsx`, `frontend/src/components/ContactForm.test.tsx`
- Create: `frontend/src/App.tsx`, `frontend/src/App.test.tsx`, `frontend/src/main.tsx`

**Interfaces:**
- `getSiteContent(): Promise<SiteContent>` obtiene `/api/content`.
- `submitContact(input: ContactRequest): Promise<void>` publica `/api/contact` y convierte errores HTTP en errores de usuario.
- `App` muestra carga, contenido o error y conecta `ContactForm` con el cliente API.

- [ ] **Step 1: Escribir tests fallidos** para formulario, envío deshabilitado, confirmación `201` y estado de error al fallar contenido.
- [ ] **Step 2: Ejecutar `npm test --workspace frontend`** y confirmar el fallo por API/App/Form inexistentes.
- [ ] **Step 3: Implementar cliente API, `ContactForm`, `App` y composición de secciones** con fallback de error visible.
- [ ] **Step 4: Ejecutar `npm test --workspace frontend`**; todos los tests deben pasar.
- [ ] **Step 5: Ejecutar los builds de ambos workspaces** y confirmar que frontend y backend compilan independientemente.

### Task 5: Integración local, documentación y revisión visual

**Files:**
- Modify: `README.md`
- Modify: `frontend/src/styles/globals.css` y estilos de componentes si la revisión encuentra desajustes dentro del alcance.

**Interfaces:**
- Frontend se ejecuta con `VITE_API_URL` y backend con `PORT`/`FRONTEND_ORIGIN`.

- [ ] **Step 1: Ejecutar la suite completa** con `npm test` y confirmar cero fallos.
- [ ] **Step 2: Ejecutar builds completos** con `npm run build` y confirmar salida exitosa.
- [ ] **Step 3: Levantar backend y frontend en procesos separados** según README y verificar `GET /api/content` y el render de la landing.
- [ ] **Step 4: Revisar visualmente desktop y móvil** contra el mockup, comprobando jerarquía, colores, espaciado, tarjetas, CTA y footer.
- [ ] **Step 5: Corregir solo desajustes dentro del alcance** y repetir tests, builds y revisión visual.
- [ ] **Step 6: Actualizar README** con comandos exactos de instalación, ejecución, tests, builds y variables de entorno.

## Final Verification Checklist

- [ ] `npm test` pasa en raíz.
- [ ] `npm run typecheck` pasa en ambos workspaces.
- [ ] `npm run build` pasa en ambos workspaces.
- [ ] `GET /api/content` devuelve contenido utilizable por el frontend.
- [ ] `POST /api/contact` valida correctamente y devuelve `201` o `400` según el caso.
- [ ] La landing conserva el layout del mockup en desktop y móvil.
- [ ] No se realizaron operaciones adicionales de Git o GitHub.
