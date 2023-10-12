import { prisma } from "database";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const products = await prisma.product.findMany();
    console.log("[API] GET /products", products);
    return NextResponse.json({ message: "success", products }, { status: 200 });
  } catch (error) {
    console.log("[API] GET /products", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log("[API] POST /products", await req.json());

    const json = await req.json();
    if (!json) {
      return NextResponse.json(
        { message: "failed", error: "Invalid request body" },
        { status: 400 }
      );
    }
    const category = await prisma.category.findFirst({
      where: {
        name: json.category,
      },
    });
    // const res = await prisma.product.create({
    //   data: {
    //     name: json.name,
    //     price: json.price,
    //     description: json.description,
    //     images: {
    //       create: {
    //         url: json.image,
    //       },
    //     },
    //   },
    // });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.log("[API] POST /products", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}
