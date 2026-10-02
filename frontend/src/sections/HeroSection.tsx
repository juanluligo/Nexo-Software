import { WHATSAPP_URL } from '../constants/contact';

export function HeroSection() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Software a medida para negocios que avanzan</p>
        <h1>Tu negocio no necesita otra página web Genérica.</h1>
        <p className="lead">Necesita una experiencia digital que converse con tus clientes, conecte tus procesos y haga más simple la conversación.</p>
        <div className="hero-actions"><a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Cuéntanos tu proyecto</a><a className="text-link" href="#proyectos">Ver proyectos <span>↗</span></a></div>
      </div>
      <div className="hero-card dark-card">
        <span className="pill pill-light">Una operación digital</span>
        <h2>hecha para tu negocio.</h2>
        <div className="metric-row"><div><strong>03</strong><span>procesos conectados</span></div><div className="metric-light"><strong>24/7</strong><span>pensada para crecer</span></div></div>
        <div className="mini-dashboard"><span>Flujo de trabajo</span><div><i /><i /><i /></div><small>Todo en un mismo lugar</small></div>
      </div>
      <p className="hero-note"><strong>Orientamos y construimos productos digitales que sí atienden primero a tu negocio.</strong> <span>Una web o un sistema solo tiene sentido si hace el trabajo más fácil.</span></p>
    </section>
  );
}
