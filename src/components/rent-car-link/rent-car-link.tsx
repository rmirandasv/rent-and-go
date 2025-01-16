"use client";
import { Car } from "@/types";
import Link from "next/link";

export default function RentCarLink({ car }: { car: Car }) {
  return (
    <Link
      href={`/cars/${car.documentId}/rent`}
      className="block bg-green-600 text-white p-4 text-center rounded-lg text-lg uppercase font-bold"
    >
      Rent this car
    </Link>
  );
}
