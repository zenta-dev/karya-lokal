import { prisma } from "database";
export async function getAllCategory(): Promise<Category[]> {
  return await prisma.category.findMany({});
}
