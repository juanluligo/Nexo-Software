import { useState } from 'react';
import type { ContactRequest } from '../types/contact';

type ContactFormProps = { submitContact: (input: ContactRequest) => Promise<void> };

export function ContactForm({ submitContact }: ContactFormProps) {
  const [form, setForm] = useState<ContactRequest>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function update(field: keyof ContactRequest, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    try {
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Nombre</label>
      <input id="contact-name" value={form.name} onChange={(event) => update('name', event.target.value)} required />
      <label htmlFor="contact-email">Correo</label>
      <input id="contact-email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} required />
      <label htmlFor="contact-message">Mensaje</label>
      <textarea id="contact-message" rows={4} value={form.message} onChange={(event) => update('message', event.target.value)} required />
      <button className="button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Hablemos de tu proyecto'}
      </button>
      {status === 'success' && <p className="form-message success" role="status">Recibimos tu mensaje. Te escribiremos pronto.</p>}
      {status === 'error' && <p className="form-message error" role="alert">No pudimos enviar tu mensaje. Inténtalo de nuevo.</p>}
    </form>
  );
}
