import { storage } from "@/lib/firebase";
import { prisma } from "database";
import { NextRequest, NextResponse } from "next/server";

import { deleteObject, ref } from "firebase/storage";

interface ProductProps {
  id: string;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: ProductProps }
) {
  console.log("[API] DELETE /products", params);
  try {
    const productImages = await prisma.image.findMany({
      where: {
        productId: params.id,
      },
    });
    const productImagesRef = productImages.map((image) =>
      ref(storage, image.name || "")
    );
    await Promise.all(productImagesRef.map((image) => deleteObject(image)));

    const images = await prisma.image.deleteMany({
      where: {
        product: {
          id: params.id,
        },
      },
    });
    const product = await prisma.product.delete({
      where: params,
    });
    console.log("[API] DELETE /products", product);
    return NextResponse.json({ message: "success", product }, { status: 200 });
  } catch (error) {
    console.log("[API] DELETE /products", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}
