import { prisma } from "database";
export const getAllProduct = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
        category: true,
      },
    });
    console.log("[API] GET /products", products);
    return products;
  } catch (error) {
    return [];
  }
};

// get product by id
const getProductById = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return { message: "success", data: product };
  } catch (error) {
    return { message: "failed", data: error };
  }
};

// create product
const createProduct = async (data: any) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        category: {
          connect: {
            id: data.category,
          },
        },
      },
    });
    return { message: "success", data: product };
  } catch (error) {
    return { message: "failed", data: error };
  }
};
