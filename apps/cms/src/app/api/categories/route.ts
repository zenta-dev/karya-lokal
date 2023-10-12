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
