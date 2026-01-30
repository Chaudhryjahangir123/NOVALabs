import { contactSubmissions, type InsertContactSubmission, type ContactSubmission } from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private currentId = 1;
  private submissions = new Map<number, ContactSubmission>();

  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = { 
      ...contact, 
      id, 
      createdAt: new Date(),
      company: contact.company || null // This fixes the "undefined" error
    };
    this.submissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();