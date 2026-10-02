import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('opens and closes the mobile menu accessibly', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /menú/i });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation')).toBeVisible();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('links contact actions directly to WhatsApp', () => {
    render(<Navbar />);

    expect(screen.getAllByRole('link', { name: 'Contacto' }).every((link) => link.getAttribute('href') === 'https://wa.me/573207904948?text=Hola%20Nexo%2C%20quiero%20hablar%20sobre%20un%20proyecto.')).toBe(true);
    expect(screen.getAllByRole('link', { name: 'Hablemos' }).every((link) => link.getAttribute('href') === 'https://wa.me/573207904948?text=Hola%20Nexo%2C%20quiero%20hablar%20sobre%20un%20proyecto.')).toBe(true);
  });
});
