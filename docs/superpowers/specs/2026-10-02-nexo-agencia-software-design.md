# Nexo — Agencia de Software

## 1. Objetivo

Construir una landing page funcional para Nexo, una agencia de software, implementando en React el mockup de Figma proporcionado por el usuario y conectándolo a un backend separado para servir contenido de la agencia y recibir solicitudes de contacto.

El resultado debe mantener la UI del mockup: fondo crema, tipografía sans-serif sobria, acentos azul/celeste, verde suave y azul oscuro, tarjetas con bordes redondeados, navegación simple y una composición editorial de alta legibilidad.

## 2. Alcance de la primera versión

Incluye:

- Landing responsive completa.
- Navegación a secciones internas mediante anchors.
- Hero principal con CTA y panel de operación digital.
- Bloque de proyectos/casos.
- Bloque de servicios.
- Bloque de proceso de trabajo.
- CTA final.
- Footer con información de servicios y ubicación.
- Endpoint de contenido para proyectos, servicios y proceso.
- Endpoint de contacto con validación de datos.
- Manejo de estados de carga y error en el formulario.
- Pruebas para los endpoints principales y componentes interactivos.

Fuera de alcance:

- Autenticación de usuarios.
- Persistencia en base de datos.
- CMS administrativo.
- Envío real de correo o integración CRM.
- Panel privado.

## 3. Arquitectura aprobada

### Frontend

- React con Vite y TypeScript.
- Componentes por sección y componentes UI pequeños reutilizables.
- Datos consumidos desde el backend mediante un cliente HTTP aislado.
- CSS organizado por tokens, layout, componentes y responsive behavior.
- Estado local solamente para carga, error y envío del formulario.

### Backend

- Node.js, Express y JavaScript.
- Rutas versionadas bajo `/api`.
- Controladores delgados que delegan en servicios.
- Validación explícita de payloads.
- CORS configurado para el origen del frontend.
- Datos iniciales en memoria, encapsulados en repositorios simples para poder sustituirlos después por una base de datos.

### Estructura de alto nivel

```text
/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── app.ts
│   └── package.json
└── docs/
```

## 4. Modelo de datos y API

### `GET /api/content`

Devuelve el contenido público de la página:

```ts
type SiteContent = {
  projects: Project[];
  services: Service[];
  process: ProcessStep[];
};
```

### `POST /api/contact`

Recibe:

```ts
type ContactRequest = {
  name: string;
  email: string;
  message: string;
};
```

Requisitos: nombre, correo válido y mensaje no vacío. Responde `201` con un acuse de recibo; responde `400` con errores de validación.

## 5. Componentes y comportamiento

- `Navbar`: logo NEXO, enlaces a secciones y CTA de contacto; en móvil usa navegación compacta.
- `HeroSection`: mensaje principal, subtítulo, CTA y tarjeta de operación digital.
- `BuiltProjectsSection`: tarjetas de proyectos con estados visuales y CTA secundario.
- `ServicesSection`: tres servicios con una tarjeta destacada azul.
- `TechnologyApproach`: mensaje “Tu negocio primero. La tecnología después.” con indicadores visuales.
- `ProjectsSection`: dos casos destacados en tarjetas de distinto tratamiento cromático.
- `ProcessSection`: cuatro pasos; el paso “Diseñamos” aparece destacado.
- `FinalCta`: bloque azul oscuro con frase principal y cita lateral.
- `Footer`: marca, descripción, servicios, ubicación y copyright.
- `ContactForm`: formulario accesible conectado al backend.

## 6. Principios de implementación

- Cada componente tendrá una responsabilidad única.
- La lógica de red no vivirá dentro de componentes visuales.
- Las secciones consumirán tipos explícitos y datos normalizados.
- Se evitará duplicación de estilos y markup.
- Se priorizará HTML semántico y controles accesibles.
- Los textos y contenidos variables se mantendrán fuera de la estructura visual cuando sea razonable.
- No se incorporarán dependencias adicionales si una solución nativa y legible es suficiente.

## 7. Manejo de errores

- El backend devolverá respuestas JSON consistentes.
- El frontend mostrará estado de carga, confirmación y error en el contacto.
- Los errores inesperados no expondrán detalles internos.
- La página seguirá siendo navegable si el endpoint de contenido falla, usando un estado de error visible.

## 8. Verificación

- Tests unitarios de validación y servicios del backend.
- Tests de rutas HTTP para contenido y contacto.
- Tests de renderizado e interacción del formulario.
- Build independiente de frontend y backend.
- Revisión visual en viewport desktop y móvil contra el mockup disponible.
- Comprobación de que el frontend arranca y consume el backend mediante configuración documentada.

## 9. Criterios de aceptación

1. La landing reproduce la jerarquía, colores, espaciado, tarjetas y secciones visibles del mockup.
2. El diseño se adapta sin romperse a móvil y desktop.
3. El frontend y el backend se ejecutan por separado.
4. `GET /api/content` entrega el contenido usado por la página.
5. `POST /api/contact` valida y acepta solicitudes correctas, y rechaza datos inválidos.
6. Las pruebas y builds definidos en el plan pasan sin errores.
7. El código queda organizado, tipado y fácil de extender.
