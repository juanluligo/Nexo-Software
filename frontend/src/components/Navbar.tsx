import { useState } from 'react';
import { WHATSAPP_URL } from '../constants/contact';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ['Servicios', '#servicios'],
    ['Proceso', '#proceso'],
    ['Proyectos', '#proyectos'],
    ['Contacto', WHATSAPP_URL],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Nexo, inicio">NEXO</a>
      <button className="menu-toggle" type="button" aria-label="Menú" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
        <span />
        <span />
      </button>
      <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
        <a className="button button-small" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>Hablemos</a>
      </nav>
    </header>
  );
}
