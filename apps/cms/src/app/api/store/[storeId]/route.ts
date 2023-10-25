import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@karya-lokal/database";

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!params.storeId) {
      return new NextResponse("Store name is required", { status: 400 });
    }

    const store = await prisma.store.findUnique({
      where: {
        name: params.storeId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!body.name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!body.logo) {
      return new NextResponse("Logo is required", { status: 400 });
    }

    if (!body.about) {
      return new NextResponse("About is required", { status: 400 });
    }

    if (!body.Address) {
      return new NextResponse("Address is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store name is required", { status: 400 });
    }

    const address = await prisma.address.updateMany({
      where: {
        id: body.Address.id,
      },
      data: {
        type: body.Address.type,
        address: body.Address.address,
        city: body.Address.city,
        state: body.Address.state,
        zip: body.Address.zip,
        country: body.Address.country,
      },
    });

    const store = await prisma.store.updateMany({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        logo: body.logo,
        about: body.about,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prisma.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
