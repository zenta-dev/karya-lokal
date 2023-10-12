import brypt from "bcrypt";
import { prisma } from "database";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const found = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (found) {
      return NextResponse.json(
        { message: "failed", error: "User already exists" },
        { status: 400 }
      );
    }
    const salt = parseInt(process.env.BCRYPT_SALT || "10");
    const hash = await brypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
      },
    });

    console.log("[API] POST /register", user);
    return NextResponse.json({ message: "success", user }, { status: 200 });
  } catch (error) {
    console.log("[API] POST /register", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}
