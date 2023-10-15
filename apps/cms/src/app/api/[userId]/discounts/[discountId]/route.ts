import { auth } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { discountId: string } }
) {
  try {
    if (!params.discountId) {
      return new NextResponse("Discount id is required", { status: 400 });
    }

    const discount = await prisma.discount.findUnique({
      where: {
        id: params.discountId,
      },
    });

    return NextResponse.json(discount);
  } catch (error) {
    console.log("[DISCOUNT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { discountId: string; userId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.discountId) {
      return new NextResponse("Discount id is required", { status: 400 });
    }

    const userByUserId = await prisma.user.findFirst({
      where: {
        id: params.userId,
      },
    });

    if (!userByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const discount = await prisma.discount.delete({
      where: {
        id: params.discountId,
      },
    });

    return NextResponse.json(discount);
  } catch (error) {
    console.log("[DISCOUNT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { discountId: string; userId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.discountId) {
      return new NextResponse("Discount id is required", { status: 400 });
    }

    const userByUserId = await prisma.user.findFirst({
      where: {
        id: params.userId,
      },
    });

    if (!userByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const discount = await prisma.discount.update({
      where: {
        id: params.discountId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(discount);
  } catch (error) {
    console.log("[DISCOUNT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
