import z from "zod";

export const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "At most 20 characters", test: (p: string) => p.length <= 20 },
  { label: "One uppercase letter (A–Z)", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One lowercase letter (a–z)", test: (p: string) => /[a-z]/.test(p) },
  { label: "One digit (0–9)", test: (p: string) => /[0-9]/.test(p) },
  {
    label: "One special character (!@#$%^&*)",
    test: (p: string) => /[!@#$%^&*]/.test(p),
  },
];

export const loginPasswordSchema = z
  .string()
  .min(8, { message: passwordRules[0].label })
  .max(20, { message: passwordRules[1].label });

export const signUpPasswordSchema = z
  .string()
  .min(8, { message: passwordRules[0].label })
  .max(20, { message: passwordRules[1].label })
  .refine(passwordRules[2].test, { message: passwordRules[2].label })
  .refine(passwordRules[3].test, { message: passwordRules[3].label })
  .refine(passwordRules[4].test, { message: passwordRules[4].label })
  .refine(passwordRules[5].test, { message: passwordRules[5].label });
