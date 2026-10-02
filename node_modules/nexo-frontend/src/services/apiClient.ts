import type { ContactRequest } from '../types/contact';
import type { SiteContent } from '../types/content';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api';

export async function getSiteContent(): Promise<SiteContent> {
  const response = await fetch(`${apiUrl}/content`);
  if (!response.ok) throw new Error('No pudimos cargar el contenido');
  return response.json() as Promise<SiteContent>;
}

export async function submitContact(input: ContactRequest): Promise<void> {
  const response = await fetch(`${apiUrl}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error('No pudimos enviar tu mensaje');
}
