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
    const { name, price, categoryId, images, isArchived, description } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    if (!params.userId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const product = await prisma.storeProduct.create({
      data: {
        name,
        isArchived: isArchived ? true : false,
        storeName: params.userId,
        categoryId,
        images: images,
        price: parseInt(price),
        description,
        // variant: {
        //   createMany: { data: body.variants },
        // },
      },
      include: {
        category: true,
        variant: true,
      },
    });
    return NextResponse.json(product);
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
