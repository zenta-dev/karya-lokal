import { prisma } from "@karya-lokal/database";
import { format } from "date-fns";
import { FlashSaleClient } from "./components/client";

const FlashSalePage = async ({ params }: { params: { userId: string } }) => {
  const flashsales = await prisma.flashSale.findMany({
    where: {
      storeName: params.userId,
    },
    include: {
      products: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts = flashsales.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    percent: item.percent,
    startDate: format(item.startDate, "MMMM do, yyyy"),
    endDate: format(item.endDate, "MMMM do, yyyy"),
    products: item.products,
    storeName: item.storeName,
    createdAt: format(item.createdAt as Date, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <FlashSaleClient data={formattedProducts} />
      </div>
    </div>
  );
};
export default FlashSalePage;
