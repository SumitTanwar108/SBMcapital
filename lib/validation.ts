import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(200, "Email must be less than 200 characters"),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid Indian phone number (10 digits starting with 6-9)"
    ),
  company: z
    .string()
    .trim()
    .max(160, "Company name must be less than 160 characters")
    .optional()
    .default(""),
  service: z
    .string()
    .trim()
    .max(100, "Service selection is invalid")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to continue" })
  }),
  website: z.string().max(0).optional().default("")
});

export type ContactFormData = z.infer<typeof contactSchema>;
