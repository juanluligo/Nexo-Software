import { SectionHeading } from '../components/SectionHeading';
import type { Project } from '../types/content';

import { WHATSAPP_URL } from '../constants/contact';

export function ProjectsSection({ projects }: { projects: Project[] }) { return <section className="section" id="proyectos"><SectionHeading eyebrow="Trabajo real" title="Cada proyecto empieza con un problema real." description="Una relación de largo plazo que deja una solución funcionando." /><div className="featured-projects">{projects.map((project) => <article className={`featured-project ${project.tone}`} key={project.id}><span className="pill">{project.label}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div><div className="project-footer"><span>Más proyectos, más casos, más confianza.</span><a className="button button-small" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Ver todos los casos</a></div></section>; }
