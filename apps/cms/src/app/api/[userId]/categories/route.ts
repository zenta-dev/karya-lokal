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

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.userId) {
      return new NextResponse("user id is required", { status: 400 });
    }

    const userByUserId = await prisma.user.findFirst({
      where: {
        id: params.userId,
      },
    });

    if (!userByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const category = await prisma.category.create({
      data: {
        name, 
        userId: params.userId,
      },
    });

    return NextResponse.json(category);
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
      return new NextResponse("user id is required", { status: 400 });
    }

    const categories = await prisma.category.findMany({
      where: {
        userId: params.userId,
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
