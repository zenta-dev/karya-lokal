import { prisma } from "database";

export async function getAllProduct(): Promise<Product[]> {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
  });
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
      category: true,
    },
  });
  return product || null;
}
