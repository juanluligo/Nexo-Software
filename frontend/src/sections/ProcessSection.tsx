import { SectionHeading } from '../components/SectionHeading';
import type { ProcessStep } from '../types/content';

import { WHATSAPP_URL } from '../constants/contact';

export function ProcessSection({ process }: { process: ProcessStep[] }) { return <section className="section" id="proceso"><SectionHeading eyebrow="Proceso" title="Simple para ti. Serio para nosotros." description="Cuatro pasos claros para llevar una idea del problema a una solución que funciona." /><div className="process-grid">{process.map((step) => <article className={`process-card ${step.featured ? 'featured' : ''}`} key={step.id}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p><b>↗</b></article>)}</div><div className="process-note"><span>La infraestructura se queda.</span><strong>La intención, también.</strong><a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Conocer el proceso <span>→</span></a></div></section>; }
