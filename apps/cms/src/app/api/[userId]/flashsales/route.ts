import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@karya-lokal/database";

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();
    console.log(body);
    const { name, percent, startDate, endDate, products, description } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
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

    if (!params.userId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    for (const product of products) {
      const productExists = await prisma.storeProduct.findUnique({
        where: {
          id: product,
        },
      });
      if (!productExists) {
        return new NextResponse("Product not found", { status: 404 });
      }
      // if product discount already exists then return error
      const productDiscountExists = await prisma.flashSale.findFirst({
        where: {
          products: {
            some: {
              id: product,
            },
          },
        },
      });
      if (productDiscountExists) {
        return new NextResponse("Product discount already exists", {
          status: 400,
        });
      }
      
    }

    const flashsale = await prisma.flashSale.create({
      data: {
        name,
        percent: parseInt(percent),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        description,
        Store: {
          connect: {
            name: params.userId,
          },
        },
        products: {
          connect: products.map((product: any) => ({
            id: product,
          })),
        },
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(flashsale);
  } catch (error) {
    console.log("[PRODUCTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const products = await prisma.storeProduct.findMany({
      where: {
        storeName: params.storeId,
        categoryId,
        isArchived: false,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log("[PRODUCTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
