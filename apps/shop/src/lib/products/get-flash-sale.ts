import { prisma } from "@karya-lokal/database";

export const getFlashSale = () => {
  //  get products that are on flash sale
  const flashSale = prisma.flashSale.findMany({
    take: 4,
    include: {
      products: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return flashSale;
};
