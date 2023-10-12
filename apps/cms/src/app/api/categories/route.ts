import { prisma } from "database";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const category = await prisma.category.findMany();
    return NextResponse.json({ message: "success", category }, { status: 200 });
  } catch (error) {
    console.log("[API] GET /products", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    return NextResponse.json({ message: "success", category }, { status: 200 });
  } catch (error) {}
}
