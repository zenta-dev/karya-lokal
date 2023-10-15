import { prisma } from "@karya-lokal/database";

export const getSalesCount = async (userId: string) => {
  const salesCount = await prisma.order.count({
    where: {
      userId: userId,
    },
  });

  return salesCount;
};
