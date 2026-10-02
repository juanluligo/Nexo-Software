import { WHATSAPP_URL } from '../constants/contact';

export function FinalCta() { return <section className="section final-cta" id="contacto"><div><span className="pill pill-light">¿Tienes una idea?</span><h2>Hagamos que tu negocio<br />se vea como merece.</h2><p>Cuéntanos qué estás intentando mejorar. Nosotros nos encargamos de convertirlo en una experiencia digital.</p><a className="button button-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Hablar con Nexo</a></div><blockquote><span>“</span>La tecnología debe quitar fricción, no agregarla.</blockquote></section>; }
