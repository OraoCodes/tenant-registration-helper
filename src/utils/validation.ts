
import { z } from "zod";

// Industry sectors schema (we're using placeholder IDs as specified)
export const industrySectorsSchema = z.array(
  z.object({
    _id: z.string(),
  })
).min(1, "Please select at least one industry sector");

// Contact person schema
export const contactPersonSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  emailAddress: z.string().email("Please enter a valid email address"),
  mobilePhoneNumber: z.string().regex(/^\+[1-9]\d{1,14}$/, "Please enter a valid phone number with country code (e.g. +1234567890)"),
});

// Registration form schema
export const registrationSchema = z.object({
  organizationDetails: z.object({
    companyName: z.string().min(2, "Company name must be at least 2 characters"),
    industrySectors: industrySectorsSchema,
  }),
  contactPersonsDetails: z.array(contactPersonSchema).min(1),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  passwordConfirm: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  recaptchaToken: z.string().min(1, "Please complete the reCAPTCHA verification"),
  logoUrl: z.string().optional(),
  redirectUrl: z.string().optional(),
  realm: z.literal("TENANT").optional(),
}).refine(data => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"],
});

// Industry sectors (placeholder data)
export const industrySectors = [
  { _id: "654c976bf1d5c28fae7b6c30", name: "Technology" },
  { _id: "654c976bf1d5c28fae7b6c38", name: "Healthcare" },
  { _id: "654c976bf1d5c28fae7b6c31", name: "Finance" },
  { _id: "654c976bf1d5c28fae7b6c32", name: "Education" },
  { _id: "654c976bf1d5c28fae7b6c33", name: "Manufacturing" },
  { _id: "654c976bf1d5c28fae7b6c34", name: "Retail" },
  { _id: "654c976bf1d5c28fae7b6c35", name: "Transportation" },
  { _id: "654c976bf1d5c28fae7b6c36", name: "Construction" },
  { _id: "654c976bf1d5c28fae7b6c37", name: "Energy" },
];

export type RegistrationFormData = z.infer<typeof registrationSchema>;
