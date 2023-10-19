import { format } from "date-fns";

import { prisma } from "@karya-lokal/database";

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
    // isFeatured: item.isFeatured,
    // isArchived: item.isArchived,
    variant: item.variant,
    category: item.category.name,
    // size: item.size.name,
    // color: item.color.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
