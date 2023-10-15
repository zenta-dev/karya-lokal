import { prisma } from "database";

export default async function getAllProduct(): Promise<Product[]> {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
  });
  return products;
}

export async function getHighSellProduct(): Promise<Product[]> {
  const products = await prisma.product.findMany({
    take: 3,
    include: {
      images: true,
      category: true,
    },
    orderBy: {
      orderItems: {
        _count: "desc",
      },
    },
  });
  return products;
}
