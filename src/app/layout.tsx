import type { Metadata } from "next";
import "./globals.css";

import { syne, dmSans } from "@/lib/fonts";
import MainProvider from "./_providers/MainProvider";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Workly",
  description: "My board for tracking achivement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(syne.variable, dmSans.variable, "font-sans", inter.variable)}>
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
