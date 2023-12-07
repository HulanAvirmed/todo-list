import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany();

  return NextResponse.json(todos);
}
