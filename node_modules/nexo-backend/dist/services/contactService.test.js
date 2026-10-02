import { describe, expect, it } from 'vitest';
import { ContactService } from './contactService.js';
describe('ContactService', () => {
    it('rejects a blank message even when it contains spaces', () => {
        const service = new ContactService();
        expect(() => service.create({ name: 'Juan', email: 'juan@example.com', message: '   ' }))
            .toThrow('Los datos de contacto no son válidos');
    });
    it('accepts a valid contact request', () => {
        const service = new ContactService();
        expect(service.create({ name: 'Juan', email: 'juan@example.com', message: 'Hola Nexo' }))
            .toMatchObject({ name: 'Juan', email: 'juan@example.com', message: 'Hola Nexo' });
    });
});
