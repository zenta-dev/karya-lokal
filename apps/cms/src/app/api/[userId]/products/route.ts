import { auth } from "@clerk/nextjs";
import { prisma } from "@karya-lokal/database";
import { NextResponse } from "next/server";
export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();
    console.log("🚀 ~ file: route.ts ~ line 11 ~ POST ~ body", body);
    const { name, price, categoryId, description, stock, images } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
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

    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!stock) {
      return new NextResponse("Stock is required", { status: 400 });
    }

    const storeByUserId = await prisma.user.findFirst({
      where: {
        id: params.userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }
    console.log(
      "🚀 ~ file: route.ts ~ line 59 ~ POST ~ storeByUserId",
      images.map((image: { url: string }) => image)
    );
    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        stock,
        categoryId,
        userId: params.userId,
        images: {
          createMany: {
            data: images.map((image: { url: string }) => image),
          },
        },
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
  { params }: { params: { userId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;

    if (!params.userId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const products = await prisma.product.findMany({
      where: {
        userId: params.userId,
        categoryId,
      },
      include: {
        images: true,
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
 