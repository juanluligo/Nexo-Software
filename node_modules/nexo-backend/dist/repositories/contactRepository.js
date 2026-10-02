export class ContactRepository {
    contacts = [];
    save(contact) {
        this.contacts.push(contact);
        return contact;
    }
}
