import { PassThrough } from "stream";
import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be alteast 2 characters")
  .max(20, "Username must not be more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not be contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be alteast 6 characters" }),
});
