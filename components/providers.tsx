"use client";
import { ThemeProvider } from "next-themes";
import { WorkspaceProvider } from "./workspace-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem><WorkspaceProvider>{children}</WorkspaceProvider></ThemeProvider>;
}
