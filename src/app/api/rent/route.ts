import { NextResponse } from "next/server";
import { createRentACarRequest } from "@/data/rent";
import { Car } from "@/types";

export async function POST(request: Request) {
  const data = await request.json();
  const car: Car = data.car;
  const formData = new FormData();
  formData.append("start_date", data.start_date);
  formData.append("end_date", data.end_date);

  try {
    await createRentACarRequest({ car, formData });
    return NextResponse.json({ message: "Rental request created" }, { status: 201 });
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to create rental request" },
      { status: 500 }
    );
  }
}
