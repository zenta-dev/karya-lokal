"use client";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProviderWrapper({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      defaultTheme="system"
      attribute="class"
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}
