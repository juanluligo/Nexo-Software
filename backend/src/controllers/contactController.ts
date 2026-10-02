import type { Request, Response } from 'express';
import { ContactService, ContactValidationError } from '../services/contactService.js';

export function createContactController(service = new ContactService()) {
  return (request: Request, response: Response) => {
    try {
      service.create(request.body);
      return response.status(201).json({ message: 'Solicitud recibida' });
    } catch (error) {
      if (error instanceof ContactValidationError) {
        return response.status(400).json({ errors: error.errors });
      }
      return response.status(500).json({ message: 'No pudimos procesar tu solicitud' });
    }
  };
}
