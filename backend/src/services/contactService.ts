import { randomUUID } from 'node:crypto';
import { ContactRepository } from '../repositories/contactRepository.js';
import type { ContactRequest, StoredContact } from '../types/contact.js';

export class ContactService {
  constructor(private readonly repository = new ContactRepository()) {}

  create(input: ContactRequest): StoredContact {
    const errors = validateContact(input);
    if (Object.keys(errors).length > 0) {
      throw new ContactValidationError(errors);
    }

    return this.repository.save({
      ...input,
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      message: input.message.trim(),
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    });
  }
}

export class ContactValidationError extends Error {
  constructor(public readonly errors: Record<string, string>) {
    super('Los datos de contacto no son válidos');
    this.name = 'ContactValidationError';
  }
}

function validateContact(input: ContactRequest): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!input.name?.trim()) errors.name = 'El nombre es obligatorio';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email?.trim() ?? '')) errors.email = 'Ingresa un correo válido';
  if (!input.message?.trim()) errors.message = 'El mensaje es obligatorio';
  return errors;
}
