import { auth } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";

const CartPage = async () => {
  const { userId } = auth();
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId || "",
    },
  });

  const cart = await prisma.userCart.findMany({
    where: {
      userId: user?.id,
    },
  });
  return <div>{JSON.stringify(cart)}</div>;
};
export default CartPage;
