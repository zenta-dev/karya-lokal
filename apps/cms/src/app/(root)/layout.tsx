import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { prisma } from "@karya-lokal/database";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: User | null = await currentUser();
  const user = await prisma.user.findUnique({
    where: {
      email: data?.emailAddresses[0].emailAddress,
    },
  });

  if (!user) {
    redirect("/sign-in");
  }

  if (user) {
    redirect(`/${user.id}`);
  }

  return <>{children}</>;
}
