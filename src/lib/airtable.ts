import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY!,
}).base(process.env.AIRTABLE_BASE_ID!);

export const contactsTable = base("Contacts");

export interface ContactData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message?: string;
  privacy_agreed: boolean;
}
