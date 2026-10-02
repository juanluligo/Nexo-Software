import { Router } from 'express';
import { createContactController } from '../controllers/contactController.js';
export function createContactRoutes() {
    const router = Router();
    router.post('/', createContactController());
    return router;
}
