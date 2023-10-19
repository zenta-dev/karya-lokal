import { prisma } from "@karya-lokal/database";

export const getTotalRevenue = async (userId: string) => {
  const paidOrders = await prisma.userOrder.findMany({
    where: {
      
    },
    include: {},
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    // const orderTotal = order.orderItems.reduce((orderSum, item) => {
    //   return orderSum + item.product.price.toNumber();
    // }, 0);
    return total + 0;
  }, 0);

  return totalRevenue;
};
