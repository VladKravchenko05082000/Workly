"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface Tab {
  value: string;
  label: string;
}

interface AuthTabsProps {
  tabs: Tab[];
  value: string;
}

export default function AuthTabs({ tabs, value }: AuthTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 p-1 bg-surface rounded-lg border border-line mb-7">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => router.push(`${pathname}?tab=${tab.value}`)}
          className={cn(
            "flex-1 p-2 text-md font-syne font-semibold tracking-md rounded-md transition-all duration-200 cursor-pointer",
            value === tab.value
              ? "bg-surface3 text-base shadow-surface"
              : "text-subtle hover:text-faint",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
