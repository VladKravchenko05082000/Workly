"use client";

import StoreProvider from "./StoreProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}
