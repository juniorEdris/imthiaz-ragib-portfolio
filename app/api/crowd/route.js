import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();
  const { traffic = "" } = body;
  if (typeof traffic !== "string") {
    return new NextResponse("Content types are not accepted!", { status: 400 });
  }

  await prisma.crowd.create({
    data: { traffic },
  });

  return NextResponse.json({
    status: 200,
    message: "Yaay!! we have got a traffic",
  });
}
