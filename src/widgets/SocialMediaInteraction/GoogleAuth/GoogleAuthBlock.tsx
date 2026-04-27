"use client";

import { GoogleAuthIcon } from "@/components/icons/GoogleAuthIcon";
import { Button } from "@/components/ui/buttons/DefaultButton";
import { createClient } from "@/lib/superbase/client";

export default function GoogleAuthBlock() {
  const handleGoogleAuth = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/home`,
      },
    });
  };

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-md text-white/40">or continue with</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        type="button"
        onClick={handleGoogleAuth}
      >
        <GoogleAuthIcon /> Continue with Google
      </Button>
    </>
  );
}
