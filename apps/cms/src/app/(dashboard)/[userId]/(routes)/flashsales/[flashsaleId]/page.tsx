import { prisma } from "@karya-lokal/database";

import { FlashSaleColumn } from "../components/columns";
import { FlashSaleForm } from "./components/flashsale-form";

const FlashsalePage = async ({
  params,
}: {
  params: { flashsaleId: string; userId: string };
}) => {
  let flashsale: FlashSaleColumn | null = null;
  if (params.flashsaleId !== "new") {
    flashsale = await prisma.flashSale.findUnique({
      where: {
        id: params.flashsaleId,
      },
      include: { products: true },
    });
  }

  const products = await prisma.storeProduct.findMany({
    where: {
      storeName: params.userId,
    },
  });
  console.log(flashsale);
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex-1 space-y-2 p-8 pt-6">
        <FlashSaleForm products={products} initialData={flashsale} />
      </div>
    </div>
  );
};

export default FlashsalePage;
