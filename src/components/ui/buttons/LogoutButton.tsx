"use client";

import { createClient } from "@/lib/superbase/client";
import { Button } from "./DefaultButton";
import { useRouter } from "next/navigation";
import { routeConfig } from "@/lib/constants/routeConfig";

function LogoutButton(): React.JSX.Element {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut({ scope: "local" });
    router.push(`/${routeConfig.login}`);
  };
  return <Button onClick={logout}>Logout</Button>;
}

export { LogoutButton };
