import { prisma } from "@karya-lokal/database";

export const getStockCount = async (userId: string) => {
  const stockCount = await prisma.storeProduct.count({
    where: {},
  });

  return stockCount;
};
