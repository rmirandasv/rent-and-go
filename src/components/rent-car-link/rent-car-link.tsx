import { getAuthUser } from "@/data/auth";
import { Car } from "@/types";
import Link from "next/link";
import { STRAPI_URL } from "@/config/strapi";

async function RentCarLink({ car }: { car: Car }) {
  const { data } = await getAuthUser();
  const href = data ? `/cars/${car.documentId}/rent` : `${STRAPI_URL}/api/connect/google`;

  return (
    <Link
      href={href}
      className="block bg-green-600 text-white p-4 text-center rounded-lg text-lg uppercase font-bold"
    >
      Rent this car
    </Link>
  );
}

export default RentCarLink;
