import { prisma } from "@karya-lokal/database";
export const getProduct = (productId: string) => {
  const product = prisma.storeProduct.findUnique({
    where: {
      id: productId,
    },
    include: {
      category: true,
      FlashSale: true,
      Store: true,
    },
  });

  return product;
};
