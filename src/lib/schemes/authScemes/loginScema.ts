import { z } from "zod";
import { loginPasswordSchema } from "../passwordSchema";

export const loginSchema = z.object({
  email: z.email(),
  password: loginPasswordSchema,
});

export type LoginFormValues = z.infer<typeof loginSchema>;
