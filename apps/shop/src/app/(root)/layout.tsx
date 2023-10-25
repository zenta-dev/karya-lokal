import { currentUser } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await currentUser();

  if (userSession) {
    const user = await prisma.user.upsert({
      where: {
        externalId: userSession?.id,
      },
      create: {
        externalId: userSession?.id!,
        username: userSession?.username,
        email: userSession?.emailAddresses[0].emailAddress!,
        firstName: userSession?.firstName,
        lastName: userSession?.lastName,
        image: userSession?.imageUrl!,
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
    console.log("UPDATING USER", user);
  }
  return <>{children}</>;
}
