import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { prisma } from "@karya-lokal/database";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, logo, about, address } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!logo) {
      return new NextResponse("Logo is required", { status: 400 });
    }

    if (!about) {
      return new NextResponse("About is required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        externalId: userId,
      },
    });

    const find = await prisma.store.findUnique({
      where: {
        name,
      },
    });

    if (find) {
      return new NextResponse("Store name already exist", { status: 400 });
    }
    const logoUrl = logo[0].url;
    const store = await prisma.store.create({
      data: {
        name,
        logo: logoUrl,
        about,
        User: {
          connect: {
            id: user?.id,
          },
        },
        Address: {
          create: {
            type: address.type,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            country: address.country,
            User: {
              connect: {
                id: user?.id,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
