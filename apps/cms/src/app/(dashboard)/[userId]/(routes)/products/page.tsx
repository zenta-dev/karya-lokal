import { prisma } from "@karya-lokal/database";

import { format } from "date-fns";
import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { userId: string } }) => {
  const products = await prisma.storeProduct.findMany({
    where: {
      storeName: params.userId,
    },
    include: {
      category: true,
      variant: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    categoryId: item.categoryId,
    price: item.price,
    images: item.images,
    discountId: item.discountId,
    userCartId: item.userCartId,
    variant: item.variant,
    category: item.category,
    createdAt: format(item.createdAt as Date, "MMMM do, yyyy"),
  }));
  console.log(formattedProducts);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
