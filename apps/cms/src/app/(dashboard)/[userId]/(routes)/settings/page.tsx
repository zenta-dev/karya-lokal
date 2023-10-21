import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { prisma } from "@karya-lokal/database";

import { SettingsForm } from "./components/settings-form";

const SettingsPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prisma.store.findFirst({
    where: {
      name: params.userId,
    },
    include: {
      Address: true,
    },
  });
  console.log(store);
  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
