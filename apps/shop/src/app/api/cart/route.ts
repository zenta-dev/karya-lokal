import { auth } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Unauthenticated", { status: 403 });
  }
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
  });

  const userCart = await prisma.userCart.findUnique({
    where: {
      userId: user?.id,
    },
  });

  const body = await req.json();
  const product = await prisma.storeProduct.findUnique({
    where: {
      id: body.productId,
    },
  });

  const productInCart = await prisma.userCart.findUnique({
    where: {
      userId: user?.id,
    },
    include: {
      products: {
        where: {
          id: product?.id,
        },
      },
    },
  });

  if (productInCart?.products?.length) {
    return new NextResponse("Product already in cart", { status: 400 });
  }

  if (!userCart) {
    if (user?.id && product?.id) {
      await prisma.userCart.create({
        data: {
          userId: user.id,
          products: {
            connect: {
              id: product.id,
            },
          },
        },
      });
    } else {
      return new NextResponse("User or Product not found", { status: 404 });
    }
  } else {
    if (user?.id && product?.id) {
      await prisma.userCart.update({
        where: {
          userId: user.id,
        },
        data: {
          products: {
            connect: {
              id: product.id,
            },
          },
        },
      });
    } else {
      return new NextResponse("User or Product not found", { status: 404 });
    }
  }

  return new NextResponse("Product added to cart", { status: 200 });
}
