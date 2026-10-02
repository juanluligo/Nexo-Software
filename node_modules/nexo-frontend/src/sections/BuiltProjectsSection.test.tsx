import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BuiltProjectsSection } from './BuiltProjectsSection';
import type { Project } from '../types/content';

const projects: Project[] = [
  { id: 'one', label: 'Salud', title: 'Protegemos GCU', description: 'Plataforma web corporativa.', tags: ['React', 'Node.js'], tone: 'blue' },
  { id: 'two', label: 'Salud', title: 'IPS San Luis', description: 'Web funcional.', tags: ['Next.js', 'Supabase'], tone: 'green' },
  { id: 'three', label: 'Otro', title: 'Nuevo Cliente', description: 'Sitio web inmobiliario.', tags: ['React', 'MongoDB'], tone: 'neutral' },
];

describe('BuiltProjectsSection', () => {
  it('renders the client showcase and moves the active slide with controls', () => {
    render(<BuiltProjectsSection projects={projects} />);

    expect(screen.getByRole('heading', { name: /trabajando en negocios reales/i })).toBeVisible();
    expect(screen.getByLabelText('1 / 3')).toBeVisible();
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByAltText('Portafolio Protegemos GCU')).toHaveAttribute('src', '/assets/PortafolioProtegemosGCU.png');
    expect(screen.getByAltText('Portafolio IPS San Luis')).toHaveAttribute('src', '/assets/PortafolioIPSSanLuis.png');
    expect(document.querySelector('.showcase-pill')).not.toBeInTheDocument();

    expect(screen.getByRole('article', { name: 'Protegemos GCU' }).querySelector('a')).toHaveAttribute('href', 'https://ipssanluisprotegemos.com/');
    expect(screen.getByRole('article', { name: 'IPS San Luis' }).querySelector('a')).toHaveAttribute('href', 'https://web.ipssanluisprotegemos.com/');

    const prospectCard = screen.getByRole('article', { name: /tu negocio puede ser nuestro próximo caso de éxito/i });
    expect(prospectCard).toHaveTextContent('Hablemos de tu proyecto');
    expect(prospectCard.querySelector('.showcase-tags')).not.toBeInTheDocument();
    expect(prospectCard.querySelector('a')).toHaveAttribute(
      'href',
      'https://wa.me/573207904948?text=Hola%20Nexo%2C%20quiero%20hablar%20sobre%20un%20proyecto.'
    );

    fireEvent.click(screen.getByRole('button', { name: 'Siguiente proyecto' }));
    expect(screen.getByLabelText('2 / 3')).toBeVisible();
    expect(screen.getAllByRole('article')[0]).not.toHaveClass('is-active');
    expect(screen.getAllByRole('article')[1]).toHaveClass('is-active');
  });
});
