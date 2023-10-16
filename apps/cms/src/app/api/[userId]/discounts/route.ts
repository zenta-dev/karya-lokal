import { auth } from "@clerk/nextjs";
import { prisma } from "database";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();
    console.log(body);
    const { name, description, percent, startDate, endDate, products } = body;

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
      return new NextResponse("Start date is required", { status: 400 });
    }

    if (!endDate) {
      return new NextResponse("End date is required", { status: 400 });
    }

    if (!products || products.length === 0) {
      return new NextResponse("Products is required", { status: 400 });
    }

    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const userByUserId = await prisma.user.findFirst({
      where: {
        id: params.userId,
      },
    });

    if (!userByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }
    console.log("PRODUCTS", products);
    const discount = await prisma.discount.create({
      data: {
        name,
        description,
        percent,
        startDate,
        endDate,
        products: {
          connect: products.map((product: any) => ({
            id: product,
          })),
        },
        user: {
          connect: {
            id: params.userId,
          },
        },
      },
    });

    return NextResponse.json(discount);
  } catch (error) {
    console.log("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const categories = await prisma.discount.findMany({});

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
