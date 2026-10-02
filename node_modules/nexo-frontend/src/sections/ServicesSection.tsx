import { SectionHeading } from '../components/SectionHeading';
import type { Service } from '../types/content';

export function ServicesSection({ services }: { services: Service[] }) {
  return <section className="section" id="servicios"><SectionHeading eyebrow="Lo que hacemos" title="Tecnología con una razón de ser." description="No acumulamos herramientas. Construimos soluciones que resuelven algo importante." /><div className="service-grid">{services.map((service) => <article className={`service-card ${service.tone}`} key={service.id}><span className="card-number">{service.id === 'web' ? '01' : service.id === 'software' ? '02' : '03'}</span><h3>{service.title}</h3><p>{service.description}</p><span className="card-arrow">↗</span></article>)}</div><div className="approach-strip"><div><p className="eyebrow">Antes de la medida</p><h3>Tu negocio primero.<br />La tecnología después.</h3></div><div className="strip-arrows"><span>ESTRATEGIA</span><b>→</b><span>DISEÑO</span><b>→</b><span>DESARROLLO</span></div></div></section>;
}
