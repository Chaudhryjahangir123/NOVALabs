import { contactSubmissions, type InsertContactSubmission, type ContactSubmission } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return submission;
  }
}

export const storage = new DatabaseStorage();
