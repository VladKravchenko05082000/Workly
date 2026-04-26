"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import GoogleAuthBlock from "../SocialMediaInteraction/GoogleAuth/GoogleAuthBlock";

import {
  RegistrationFormValues,
  registrationSchema,
} from "@/lib/schemes/authScemes/registrationSchema";
import { routeConfig } from "@/lib/constants/routeConfig";

export default function RegistrationForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    router.push(`/${routeConfig.home}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6"
    >
      <FieldSet className="w-full">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Email</FieldLabel>
            <Input
              id="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              placeholder="Type your password"
              type="password"
              {...register("password")}
            />
            <FieldError errors={[errors.password]} />
          </Field>
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input
              id="confirmPassword"
              placeholder="Retype your password"
              type="password"
              {...register("confirmPassword")}
            />
            <FieldError errors={[errors.confirmPassword]} />
          </Field>
        </FieldGroup>
      </FieldSet>

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        type="submit"
        disabled={!isValid}
      >
        Create Account
      </Button>

      <GoogleAuthBlock />
    </form>
  );
}
