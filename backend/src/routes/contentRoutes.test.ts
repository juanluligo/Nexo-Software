import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { createApp } from '../app.js';

describe('GET /api/content', () => {
  it('returns the public site content', async () => {
    const response = await request(createApp()).get('/api/content');

    expect(response.status).toBe(200);
    expect(response.body.projects).toHaveLength(3);
    expect(response.body.services).toHaveLength(3);
    expect(response.body.process).toHaveLength(4);
  });
});
