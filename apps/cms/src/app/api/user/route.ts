import { prisma } from "database";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("[API SERVER] POST /api/user:\n", body);
    if (!body.primaryEmailAddress.emailAddress) {
      throw new Error("Email is required");
    }
    const user = await prisma.user.findFirst({
      where: { email: body.email },
    });
    if (!user) {
      await prisma.user.create({
        data: {
          email: body.primaryEmailAddress.emailAddress,
          name: body.fullName,
          authStrategy: body.primaryEmailAddress.verification.strategy,
          image: body.imageUrl,
          phone: body.primaryPhoneNumber,
          createdAt: body.createdAt,
          updatedAt: body.updatedAt,
        },
      });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (e: any) {
    return new NextResponse(e.toString(), { status: 500 });
  }
}
