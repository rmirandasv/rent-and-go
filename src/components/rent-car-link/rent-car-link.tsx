"use client";
import { Car } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RentCarLink({ car }: { car: Car }) {
  const [href, setHref] = useState<string>(`/cars/${car.documentId}/rent`);
  useEffect(() => {
    async function fetchSession () {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      console.log(data);
      if (data?.user) {
        setHref(`/cars/${car.documentId}/rent`);
      } else {
        setHref(`/api/auth/signin?callbackUrl=/cars/${car.documentId}/rent`);
      }
    }
    fetchSession();
  }, [car.documentId]);
  return (
    <Link
      href={href}
      className="block bg-green-600 text-white p-4 text-center rounded-lg text-lg uppercase font-bold"
    >
      Rent this car
    </Link>
  );
}
