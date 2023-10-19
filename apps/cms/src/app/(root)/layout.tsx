import { currentUser } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";
import { redirect } from "next/navigation";

export default async function SetupLayout({
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

  return <>{children}</>;
}
