import { DiscountForm } from "./components/discount-form";

import { prisma } from "database";
const DiscountPage = async ({
  params,
}: {
  params: { discountId: string; userId: string };
}) => {
  let discount = null;
  if (params.discountId !== "new") {
    discount = await prisma.discount.findUnique({
      where: {
        id: params.discountId,
      },
    });
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DiscountForm initialData={discount} />
      </div>
    </div>
  );
};

export default DiscountPage;
