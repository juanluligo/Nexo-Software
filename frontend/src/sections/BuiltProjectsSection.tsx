import { useState } from 'react';
import type { Project } from '../types/content';
import { WHATSAPP_URL } from '../constants/contact';

type BuiltProjectsSectionProps = { projects: Project[] };

export function BuiltProjectsSection({ projects }: BuiltProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState(0);

  function move(direction: number) {
    setActiveProject((current) => (current + direction + projects.length) % projects.length);
  }

  return (
    <section className="section built-section" id="clientes">
      <div className="built-heading">
        <div className="built-title"><p className="eyebrow">Nuestros clientes</p><h2>Trabajando en negocios<br />reales.<span /></h2></div>
        <p className="built-intro">Hemos desarrollado soluciones digitales para empresas en Popayán y alrededores. Cada proyecto es único, así como cada negocio que confía en nosotros.</p>
        <div className="built-controls"><button type="button" aria-label="Proyecto anterior" onClick={() => move(-1)}>‹</button><button type="button" aria-label="Siguiente proyecto" onClick={() => move(1)}>›</button><span aria-label={`${activeProject + 1} / ${projects.length}`}><b>{activeProject + 1}</b> / {projects.length}</span><i><em style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }} /></i></div>
      </div>
      <div className="built-showcase" aria-live="polite">
        {projects.map((project, index) => <ProjectShowcaseCard key={project.id} project={project} index={index} isActive={index === activeProject} />)}
      </div>
    </section>
  );
}

function ProjectShowcaseCard({ project, index, isActive }: { project: Project; index: number; isActive: boolean }) {
  const isProspectCard = index === 2;
  const title = isProspectCard ? 'Tu negocio puede ser nuestro próximo caso de éxito' : project.title;
  const description = isProspectCard
    ? 'Cuéntanos tu idea y construyamos una solución digital que haga crecer tu negocio.'
    : project.description;
  const actionLabel = isProspectCard ? 'Hablemos de tu proyecto' : 'Ver proyecto';
  const projectLink = index === 0
    ? 'https://web.ipssanluisprotegemos.com/'
    : index === 1
      ? 'https://ipssanluisprotegemos.com/'
      : WHATSAPP_URL;

  return <article aria-label={title} className={`showcase-card ${project.tone} ${isActive ? 'is-active' : ''}`}>
        <div className={`showcase-visual visual-${index + 1} ${index < 2 ? 'has-image' : ''}`}>
      {index === 0 && <img className="showcase-image" src="/assets/PortafolioProtegemosGCU.png" alt="Portafolio Protegemos GCU" />}
      {index === 1 && <img className="showcase-image" src="/assets/PortafolioIPSSanLuis.png" alt="Portafolio IPS San Luis" />}
      {index === 2 && <div className="browser-mockup"><div className="browser-top"><span /><span /><span /></div><div className="browser-content"><b>Encuentra el espacio{`\n`}perfecto para tu próxima inversión</b><small>La experiencia inmobiliaria pensada para ti</small><div className="mockup-button" /><div className="mockup-lines"><i /><i /><i /></div></div></div>}
      {index === 2 && <div className="phone-mockup"><span /><b /><i /><i /><i /></div>}
    </div>
    <div className="showcase-body"><div><h3>{title}</h3><p>{description}</p>{!isProspectCard && <div className="showcase-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}</div><a className="showcase-link" href={projectLink} target="_blank" rel="noreferrer">{actionLabel} <b>↗</b></a></div>
  </article>;
}
