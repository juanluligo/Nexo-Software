import { ContentRepository } from '../repositories/contentRepository.js';
export class ContentService {
    repository;
    constructor(repository = new ContentRepository()) {
        this.repository = repository;
    }
    getContent() {
        return this.repository.findAll();
    }
}
