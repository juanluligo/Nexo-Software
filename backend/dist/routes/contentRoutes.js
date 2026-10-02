import { Router } from 'express';
import { createContentController } from '../controllers/contentController.js';
export function createContentRoutes() {
    const router = Router();
    router.get('/', createContentController());
    return router;
}
