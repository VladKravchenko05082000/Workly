"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/superbase/client";

import { EyeOpenIcon } from "@/components/icons/EyeOpenIcon";
import { EyeClosedIcon } from "@/components/icons/EyeClosedIcon";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import GoogleAuthBlock from "../SocialMediaInteraction/GoogleAuth/GoogleAuthBlock";
import { Button } from "@/components/ui/buttons/DefaultButton";
import { ErrorsMessage } from "@/components/ui/ErrorsMessage";

import { routeConfig } from "@/lib/constants/routeConfig";

import {
  LoginFormValues,
  loginSchema,
} from "@/lib/schemes/authScemes/loginScema";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: LoginFormValues) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError("root", { message: error.message });
      return;
    }

    router.push(`/${routeConfig.home}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6"
    >
      <FieldSet className="w-full">
        <FieldGroup>
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field data-invalid={!!errors.password}>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Type your password"
              endIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="flex items-center text-subtle hover:text-foreground transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOpenIcon size={16} />
                  ) : (
                    <EyeClosedIcon size={16} />
                  )}
                </button>
              }
              {...register("password")}
            />
            <FieldError errors={[errors.password]} />
          </Field>
        </FieldGroup>
      </FieldSet>

      {errors.root && <ErrorsMessage message={errors.root.message} />}

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        Sign In
      </Button>

      <GoogleAuthBlock />
    </form>
  );
}
