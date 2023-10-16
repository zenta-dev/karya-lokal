import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";

import Navbar from "@/components/NavBar";
// import { ThemeProviders } from "@/providers/ThemeProviders";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Karya Lokal",
  description: "Karya Lokal Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className + " mx-4"}>
          {/* <ThemeProviders> */}
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          {/* </ThemeProviders> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
