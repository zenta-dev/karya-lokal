import { prisma } from ".";
const categories = [
  {
    name: "Pakaian",
    slug: "pakaian",
    parentSlug: null,
    level: 0,
  },
  {
    name: "Pakaian Pria",
    slug: "pakaian;pria",
    parentSlug: "pakaian",
    level: 1,
  },
  {
    name: "Pakaian Wanita",
    slug: "pakaian;wanita",
    parentSlug: "pakaian",
    level: 1,
  },
  {
    name: "Pakaian Anak",
    slug: "pakaian;anak",
    parentSlug: "pakaian",
    level: 1,
  },
  {
    name: "Pakaian Anak Laki-laki",
    slug: "pakaian;anak;laki-laki",
    parentSlug: "pakaian;anak",
    level: 2,
  },
  {
    name: "Pakaian Anak Perempuan",
    slug: "pakaian;anak;perempuan",
    parentSlug: "pakaian;anak",
    level: 2,
  },
];
export async function seed() {
  try {
    for (const category of categories) {
      await prisma.category.upsert({
        where: { slug: category.slug },
        update: {
          name: category.name,
          slug: category.slug,
          parentSlug: category.parentSlug,
          level: category.level,
        },
        create: category,
      });
    }
  } catch (error) {}
}
