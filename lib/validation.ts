import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian phone number."),
  company: z.string().trim().max(160).optional().default(""),
  service: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
  website: z.string().max(0).optional().default("")
});

export type ContactFormData = z.infer<typeof contactSchema>;
