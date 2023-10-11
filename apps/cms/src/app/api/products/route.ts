import { prisma } from "database";
import { NextResponse } from "next/server";
export async function POST(req: any) {
  const { name, description, price, stock, imageUrl, category } =
    await req.json();
  const product = await prisma.product.create({
    data: {
      name: name,
      description: description,
      price: price,
      stock: stock,
      imageUrl: imageUrl,
      category: category,
    },
  });
  console.log("[API] POST /product", product);
  return NextResponse.json({ message: "success", product }, { status: 200 });
}
