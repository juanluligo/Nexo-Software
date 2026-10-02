import { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Navbar } from './components/Navbar';
import { getSiteContent, submitContact } from './services/apiClient';
import { BuiltProjectsSection } from './sections/BuiltProjectsSection';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProcessSection } from './sections/ProcessSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { TechnologyApproach } from './sections/TechnologyApproach';
import type { SiteContent } from './types/content';

type AppProps = { loadContent?: () => Promise<SiteContent> };

export function App({ loadContent = getSiteContent }: AppProps) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => { loadContent().then(setContent).catch(() => setHasError(true)); }, [loadContent]);

  if (hasError) return <div className="page-state"><h1>No pudimos cargar el contenido.</h1><p>Intenta recargar la página en unos segundos.</p></div>;
  if (!content) return <div className="page-state"><p>Cargando una mejor forma de avanzar…</p></div>;

  return <><Navbar /><main><HeroSection /><BuiltProjectsSection projects={content.projects} /><ServicesSection services={content.services} /><TechnologyApproach /><ProjectsSection projects={content.projects.slice(0, 2)} /><ProcessSection process={content.process} /><FinalCta /><section className="contact-panel section" id="contact-form"><div><p className="eyebrow">Hablemos</p><h2>Cuéntanos qué quieres mover.</h2><p>Una conversación honesta es un buen primer paso.</p></div><ContactForm submitContact={submitContact} /></section></main><Footer /></>;
}

