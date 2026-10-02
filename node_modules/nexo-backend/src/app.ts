import cors from 'cors';
import express from 'express';
import { createContactRoutes } from './routes/contactRoutes.js';
import { createContentRoutes } from './routes/contentRoutes.js';

export function createApp() {
  const app = express();
  app.use(cors({ origin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173' }));
  app.use(express.json());
  app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
  app.use('/api/content', createContentRoutes());
  app.use('/api/contact', createContactRoutes());
  return app;
}
