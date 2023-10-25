import { prisma } from "@karya-lokal/database";

import { ProductColumn } from "../components/columns";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; userId: string };
}) => {
  let product: ProductColumn | null = null;
  if (params.productId !== "new") {
    product = await prisma.storeProduct.findUnique({
      where: {
        id: params.productId,
      },
      include: { category: true, variant: true },
    });
  }

  const categories = await prisma.category.findMany();

  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex-1 space-y-2 p-8 pt-6">
        <ProductForm categories={categories} initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
