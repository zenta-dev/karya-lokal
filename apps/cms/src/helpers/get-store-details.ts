import { prisma } from "@karya-lokal/database";

export const getStoreDetails = async (storeName: string) => {
  const stockCount = await prisma.store.count({
    where: {
      name: storeName,
    },
  });

  return stockCount;
};
