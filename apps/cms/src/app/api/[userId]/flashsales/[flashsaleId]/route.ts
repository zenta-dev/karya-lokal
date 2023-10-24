import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@karya-lokal/database";

export async function GET(
  req: Request,
  { params }: { params: { flashsaleId: string } }
) {
  try {
    if (!params.flashsaleId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    const product = await prisma.storeProduct.findUnique({
      where: {
        id: params.flashsaleId,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { flashsaleId: string; storeId: string } }
) {
  try {
    const { userId } = auth();
    console.log("params", params);
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.flashsaleId) {
      return new NextResponse("Flash Sale id is required", { status: 400 });
    }

    const storeByUserId = await prisma.store.findFirst({
      where: {
        name: params.storeId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const flashSale = await prisma.flashSale.delete({
      where: {
        id: params.flashsaleId,
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(flashSale);
  } catch (error) {
    console.log("[FLASHSALE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { flashsaleId: string; storeId: string } }
) {
  try {
    const { userId } = auth();
    console.log("params", params);

    const body = await req.json();

    const { name, percent, startDate, endDate, products, description } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.flashsaleId) {
      return new NextResponse("Flash Sale id is required", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!percent) {
      return new NextResponse("Percent is required", { status: 400 });
    }

    if (!startDate) {
      return new NextResponse("Start Date is required", { status: 400 });
    }

    if (!endDate) {
      return new NextResponse("End Date is required", { status: 400 });
    }

    if (!products || !products.length) {
      return new NextResponse("Products is required", { status: 400 });
    }

    const storeByUserId = await prisma.store.findFirst({
      where: {
        name: params.storeId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const flashSale = await prisma.flashSale.update({
      where: {
        id: params.flashsaleId,
      },
      data: {
        name,
        percent: parseInt(percent),
        startDate,
        endDate,
        description,
        products: {
          set: products.map((product: any) => ({
            id: product,
          })),
        },
      },
      include: {
        products: true,
      },
    });

    return NextResponse.json(flashSale);
  } catch (error) {
    console.log("[PRODUCT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
