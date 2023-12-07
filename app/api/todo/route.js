import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();

  const todo = await prisma.todo.create({
    data: res,
  });

  return NextResponse.json(todo);
}

export async function PUT(request) {
  const res = await request.json();

  const todo = await prisma.todo.update({
    where: { id: res.id },
    data: {
      name: res.name,
      completed: res.completed,
    },
  });

  return NextResponse.json(todo);
}

export async function DELETE(request) {
  const res = await request.json();

  const todo = await prisma.todo.delete({
    where: { id: res.id },
  });

  return NextResponse.json(todo);
}
