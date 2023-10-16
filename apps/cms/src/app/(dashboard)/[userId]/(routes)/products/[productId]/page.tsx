import { prisma } from "database";

import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; userId: string };
}) => {
  let product = null;
  if (params.productId !== "new") {
    product = await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
      },
    });
  }

  const categories = await prisma.category.findMany();

  const variants = await prisma.productVariant.findMany();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          variants={variants}
          initialData={product}
        />
      </div>
    </div>
  );
};

export default ProductPage;
