import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/providers";
import { AppShell } from "../components/app-shell";

export const metadata: Metadata = {
  title: "TechCodex 360",
  description: "My End-to-End Tech & Engineering Codex",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><Providers><AppShell>{children}</AppShell></Providers></body>
    </html>
  );
}
