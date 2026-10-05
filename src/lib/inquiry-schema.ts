import { z } from "zod";

export const algerianPhoneRegex = /^(?:0[5-7]\d{8}|\+213[5-7]\d{8})$/;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom (2 caractères minimum).").max(80),
  phone: z
    .string()
    .trim()
    .min(1, "Indiquez votre numéro de téléphone.")
    .refine((v) => algerianPhoneRegex.test(v.replace(/[\s.-]/g, "")), {
      message: "Numéro algérien invalide (ex. 0550 59 02 88 ou +213…).",
    }),
  course: z.string().min(1, "Choisissez une formation."),
  message: z.string().trim().max(1000, "Message trop long (1000 caractères max).").optional(),
  website: z.string().max(0, "Requête invalide.").optional(), // honeypot
});

export type InquiryInput = z.infer<typeof inquirySchema>;
