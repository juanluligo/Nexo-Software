import { ContentService } from '../services/contentService.js';
export function createContentController(service = new ContentService()) {
    return (_request, response) => response.json(service.getContent());
}
