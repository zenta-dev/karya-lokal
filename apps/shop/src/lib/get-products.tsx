import { prisma } from "@karya-lokal/database";
import { Product } from "../../types";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const data: Product[] = await prisma.product.findMany({
    include: {
      images: true,
      variants: true,
    },
  });
  // console.log(data);
  return data;
};

export default getProducts;
