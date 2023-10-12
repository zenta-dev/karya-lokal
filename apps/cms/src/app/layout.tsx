import AuthProvider from "@/components/global/AuthProvider";
import ThemeProviderWrapper from "@/components/global/themes/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karya Lokal CMS",
  description: "Karya Lokal CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
