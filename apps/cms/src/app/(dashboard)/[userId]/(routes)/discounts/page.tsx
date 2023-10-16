import { prisma } from "database";

import { DiscountsClient } from "./components/client";
import { DiscountColumn } from "./components/columns";

const DiscountsPage = async ({ params }: { params: { userId: string } }) => {
  const discounts = await prisma.discount.findMany({
    where: {
      userId: params.userId,
    },
  });
  // find products by discount id
  let products: any = [];
  for (let i = 0; i < discounts.length; i++) {
    const discount = discounts[i];
    const discountProducts = await prisma.product.findMany({
      where: {
        discountId: discount.id,
      },
    });
    console.log("DISCOUNT PRODUCTS", discountProducts);
    products.push(discountProducts);
  }

  const formattedDiscounts: DiscountColumn[] = discounts.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: item.createdAt.toString(),
    updatedAt: item.updatedAt.toString(),
    products: products ? products : [],
  }));

  // find products by discount id

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DiscountsClient data={formattedDiscounts} />
      </div>
    </div>
  );
};

export default DiscountsPage;
