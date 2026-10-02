import type { StoredContact } from '../types/contact.js';

export class ContactRepository {
  private readonly contacts: StoredContact[] = [];

  save(contact: StoredContact): StoredContact {
    this.contacts.push(contact);
    return contact;
  }
}
