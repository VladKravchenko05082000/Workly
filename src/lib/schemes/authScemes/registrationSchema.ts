import { z } from "zod";
import { passwordSchema } from "../passwordSchema";

export const registrationSchema = z
  .object({
    email: z.email(),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not matching",
    path: ["confirmPassword"],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
