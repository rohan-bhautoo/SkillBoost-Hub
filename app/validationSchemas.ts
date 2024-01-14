import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().min(1, "First Name is required.").max(255),
  lastName: z.string().min(1, "Last Name is required.").max(255),
  email: z.string().email("Email Address is required."),
  password: z.string().min(8, "Password is required"),
});

export const loginSchema = z.object({
  email: z.string().email("Email Address is required."),
  password: z.string().min(8, "Password is required"),
});
