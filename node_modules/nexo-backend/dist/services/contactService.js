import { randomUUID } from 'node:crypto';
import { ContactRepository } from '../repositories/contactRepository.js';
export class ContactService {
    repository;
    constructor(repository = new ContactRepository()) {
        this.repository = repository;
    }
    create(input) {
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
    errors;
    constructor(errors) {
        super('Los datos de contacto no son válidos');
        this.errors = errors;
        this.name = 'ContactValidationError';
    }
}
function validateContact(input) {
    const errors = {};
    if (!input.name?.trim())
        errors.name = 'El nombre es obligatorio';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email?.trim() ?? ''))
        errors.email = 'Ingresa un correo válido';
    if (!input.message?.trim())
        errors.message = 'El mensaje es obligatorio';
    return errors;
}
