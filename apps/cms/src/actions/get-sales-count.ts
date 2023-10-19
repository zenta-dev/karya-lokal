import { prisma } from "@karya-lokal/database";

export const getSalesCount = async (userId: string) => {
  const salesCount = await prisma.userOrder.count({
    where: {},
  });

  return salesCount;
};
