import { NextResponse } from "next/server";
import { updateUser } from "@/data/auth";

export async function PUT(request: Request) {
  const { phone, name } = await request.json();
  try {
    await updateUser({
      name,
      phone,
    });
    return NextResponse.json({ message: "User updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
