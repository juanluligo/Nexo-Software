import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('disables submit while sending and confirms a successful request', async () => {
    let resolveRequest: () => void = () => undefined;
    const submitContact = vi.fn(() => new Promise<void>((resolve) => { resolveRequest = resolve; }));
    render(<ContactForm submitContact={submitContact} />);

    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Juan' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'juan@example.com' } });
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola' } });
    fireEvent.click(screen.getByRole('button', { name: /hablemos/i }));

    expect(screen.getByRole('button', { name: /enviando/i })).toBeDisabled();
    resolveRequest();
    await waitFor(() => expect(screen.getByText(/recibimos tu mensaje/i)).toBeVisible());
  });
});
