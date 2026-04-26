import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workly: Auth",
  description: "Auth Form",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
