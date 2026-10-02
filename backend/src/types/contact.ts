export type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export type StoredContact = ContactRequest & {
  id: string;
  createdAt: string;
};
