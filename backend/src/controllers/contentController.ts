import type { Request, Response } from 'express';
import { ContentService } from '../services/contentService.js';

export function createContentController(service = new ContentService()) {
  return (_request: Request, response: Response) => response.json(service.getContent());
}
