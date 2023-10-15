import Navbar from "@/components/NavBar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  //   const store = await prisma.user.findFirst({
  //     where: {
  //       id: params.userId,
  //       userId,
  //     },
  //   });

  //   if (!store) {
  //     redirect("/");
  //   }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
