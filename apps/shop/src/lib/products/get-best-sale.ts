import { prisma } from "@karya-lokal/database";
export const getBestSale = async () => {
  const bestSale = await prisma.userOrderItem.findMany({
    take: 1,
    include: {
      product: true,
    },
    orderBy: {
      quantity: "desc",
    },
  });
  return bestSale;
};
