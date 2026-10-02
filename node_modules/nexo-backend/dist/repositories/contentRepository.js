const content = {
    projects: [
        {
            id: 'protegemos-gcu',
            label: 'Salud',
            title: 'Protegemos GCU',
            description: 'Plataforma web corporativa con sistema de pagos, gestión de servicios y panel administrativo.',
            tags: ['React', 'Node.js', 'Supabase', 'Pasarela de pagos'],
            tone: 'blue',
        },
        {
            id: 'ips-san-luis',
            label: 'Salud',
            title: 'IPS San Luis',
            description: 'Web funcional, moderna y optimizada para la gestión de citas médicas y atención a pacientes.',
            tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Agenda médica'],
            tone: 'green',
        },
        {
            id: 'nuevo-cliente',
            label: 'Otro',
            title: 'Nuevo Cliente',
            description: 'Sitio web inmobiliario con catálogo de propiedades, filtros de búsqueda y formulario de contacto.',
            tags: ['React', 'Node.js', 'MongoDB', 'Mapas'],
            tone: 'neutral',
        },
    ],
    services: [
        { id: 'web', title: 'Web que vende', description: 'Sitios que explican tu valor y convierten visitas en conversaciones.', tone: 'neutral' },
        { id: 'software', title: 'Software a medida', description: 'Herramientas digitales pensadas para tu forma real de trabajar.', tone: 'blue' },
        { id: 'automation', title: 'Automatización', description: 'Menos tareas repetidas. Más tiempo para hacer avanzar el negocio.', tone: 'green' },
    ],
    process: [
        { id: 'discover', number: '01', title: 'Descubrimos', description: 'Entendemos tu negocio, tus clientes y el problema que vale la pena resolver.' },
        { id: 'design', number: '02', title: 'Diseñamos', description: 'Convertimos la estrategia en una experiencia clara y útil.', featured: true },
        { id: 'build', number: '03', title: 'Construimos', description: 'Desarrollamos con foco, criterio técnico y comunicación constante.' },
        { id: 'launch', number: '04', title: 'Lanzamos', description: 'Ponemos la solución a trabajar y medimos lo que sigue.' },
    ],
};
export class ContentRepository {
    findAll() {
        return content;
    }
}
