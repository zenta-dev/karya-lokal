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
  // await prisma.productVariant.deleteMany({});
  // await prisma.storeProduct.deleteMany({});
  // await prisma.storeProduct.upsert({
  //   where: {
  //     id: "653325a3b7a587669c815ac5",
  //   },
  //   update: {},
  //   create: {
  //     name: "test",
  //     description: "6530142b915da67c5b11760a",
  //     price: 10000,
  //     storeName: params.userId,
  //     categoryId: "6530142b915da67c5b11760a",
  //     variant: {
  //       create: [
  //         {
  //           name: "Red",
  //           type: "Color",
  //           stock: 1,
  //           price: 10000,
  //           values: [
  //             {
  //               type: "Size",
  //               name: "Small",
  //               stock: 20,
  //               price: 10000,
  //             },
  //             {
  //               type: "Size",
  //               name: "Medium",
  //               stock: 10,
  //               price: 12000,
  //             },
  //           ],
  //         },
  //         {
  //           type: "Color",
  //           name: "Green",
  //           stock: 1,
  //           price: 10000,
  //           values: [
  //             {
  //               type: "Size",
  //               name: "Small",
  //               stock: 5,
  //               price: 75000,
  //             },
  //             {
  //               type: "Size",
  //               name: "Medium",
  //               stock: 3,
  //               price: 90000,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // });
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
