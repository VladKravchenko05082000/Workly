"use client";

import { ThemeProvider } from "@mui/material";

import StoreProvider from "./StoreProvider";

import theme from "@/lib/utils/theme";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  );
}
