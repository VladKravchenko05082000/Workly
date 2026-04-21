import type { Metadata } from "next";
import "./globals.css";

import { syne, dmSans } from "@/lib/fonts";
import MainProvider from "./_providers/MainProvider";

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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
