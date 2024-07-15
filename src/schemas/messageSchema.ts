import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be alteast of 10 character" })
    .max(300, { message: "Content must not be exceed 300 character" }),
});
