import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "E-Commerce Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await currentUser();

  if (!userSession) {
    redirect("/sign-in");
  }

  const user = await prisma.user.upsert({
    where: {
      externalId: userSession?.id,
    },
    create: {
      externalId: userSession?.id,
      username: userSession?.username,
      email: userSession?.emailAddresses[0].emailAddress,
      firstName: userSession?.firstName,
      lastName: userSession?.lastName,
      image: userSession?.imageUrl,
      authStrategy: userSession?.emailAddresses[0].verification?.strategy,
    },
    update: {
      email: userSession?.emailAddresses[0].emailAddress,
      username: userSession?.username,
      firstName: userSession?.firstName,
      lastName: userSession?.lastName,
      image: userSession?.imageUrl,
      authStrategy: userSession?.emailAddresses[0].verification?.strategy,
    },
  });
  console.log(user);
  const store = await prisma.store.findUnique({
    where: {
      userId: user.id,
    },
  });
  console.log(store);
  if (store) {
    redirect(`/${store.name}`);
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
