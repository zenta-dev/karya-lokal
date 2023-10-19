import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import { prisma } from "@karya-lokal/database";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  console.log("DashboardLayout " + params.userId);

  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
  });
  if (!user) {
    redirect("/sign-in");
  }

  const store = await prisma.store.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
