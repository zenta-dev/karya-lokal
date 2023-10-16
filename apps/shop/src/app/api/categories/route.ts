import { prisma } from "@karya-lokal/database";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany({});

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
