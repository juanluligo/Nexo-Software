import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { createApp } from '../app.js';

describe('POST /api/contact', () => {
  it('returns 201 for a valid request', async () => {
    const response = await request(createApp()).post('/api/contact').send({
      name: 'Juan',
      email: 'juan@example.com',
      message: 'Quiero hablar sobre un proyecto.',
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Solicitud recibida');
  });

  it('returns 400 with field errors for invalid input', async () => {
    const response = await request(createApp()).post('/api/contact').send({
      name: '',
      email: 'not-an-email',
      message: '   ',
    });

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual({
      name: 'El nombre es obligatorio',
      email: 'Ingresa un correo válido',
      message: 'El mensaje es obligatorio',
    });
  });
});
