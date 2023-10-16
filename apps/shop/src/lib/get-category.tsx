import { Category, prisma } from "@karya-lokal/database";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getCategoriess = async (query: Query): Promise<Category[]> => {
  const data: Category[] = await prisma.category.findMany({});
  // console.log(data);
  return data;
};
