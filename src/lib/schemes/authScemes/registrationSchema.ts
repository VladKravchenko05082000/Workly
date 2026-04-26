import { z } from "zod";
import { signUpPasswordSchema } from "../passwordSchema";

export const registrationSchema = z
  .object({
    email: z.email(),
    password: signUpPasswordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not matching",
    path: ["confirmPassword"],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
