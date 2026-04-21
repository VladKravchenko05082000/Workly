// app/ui/NavLink.tsx
"use client";

import Link from "next/link";
import LoadingIndicator from "../loading/LoadingIndicator";

export default function NavLink({
  href,
  prefetch = true,
  children,
}: {
  href: string;
  prefetch?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} prefetch={prefetch} className="flex items-center gap-2">
      {children}
      <LoadingIndicator />
    </Link>
  );
}
