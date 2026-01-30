import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(server: Server, app: Express) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  app.post("/api/contact", async (req, res) => {
    try {
      // 1. Validate data
      const data = insertContactSchema.parse(req.body);

      // 2. Save to Memory Storage
      const contact = await storage.createContactSubmission(data);

      // 3. Send Email to YOU (Enabled!)
      const mailOptions = {
        from: process.env.GMAIL_USER, // Sender address
        to: "jahangiribrhim@gmail.com", // YOUR EMAIL
        subject: `NovaLabs: New Inquiry from ${data.name}`,
        html: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || "N/A"}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f3f4f6; padding: 15px; border-left: 5px solid #000;">
            ${data.message}
          </blockquote>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");

      res.status(200).json(contact);
    } catch (error) {
      console.error("SERVER ERROR:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return server;
}