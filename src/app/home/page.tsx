import NavLink from "@/components/navigate/NavLink";
import { LogoutButton } from "@/components/ui/buttons/LogoutButton";

import { routeConfig } from "@/lib/constants/routeConfig";

export default function HomePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <NavLink href={`/${routeConfig.home}/${routeConfig.createColumn}`}>
          Create Column
        </NavLink>
        <LogoutButton />
      </main>
    </div>
  );
}
