import { ContentRepository } from '../repositories/contentRepository.js';

export class ContentService {
  constructor(private readonly repository = new ContentRepository()) {}

  getContent() {
    return this.repository.findAll();
  }
}
