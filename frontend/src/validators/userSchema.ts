import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string().min(3, {
      message: "Email inválido",
    }),
    status: z.boolean().default(false).optional().default(false),
    admission_date: z.date()
})