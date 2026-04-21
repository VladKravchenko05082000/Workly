"use client";

import { useLinkStatus } from "next/link";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();

  return (
    <span
      className={`transition-opacity ${pending ? "opacity-100" : "opacity-0"}`}
      style={{ animationDelay: "100ms" }}
    >
      Loading...
    </span>
  );
}
