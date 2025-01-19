import { Rental } from "@/types";
import Image from "next/image";
import { STRAPI_URL } from "@/config/strapi";
import StatusBadge from "./status-badge";
import Link from "next/link";

export default function RentedCarItem({ rental }: { rental: Rental }) {
  return (
    <Link href={`/dashboard/${rental.documentId}`} className="flex flex-col md:flex-row p-4 md:p-8 bg-white rounded-lg border border-gray-200">
      <div className="flex-1 order-2 md:order-1">
        <h2 className="text-lg font-bold">
          {rental.car.brand.name} {rental.car.model.name}
        </h2>
        <p className="text-sm text-gray-500">{rental.car.year}</p>
        <p className="text-sm text-gray-500">{rental.car.license_plate}</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Rental Start Date</span>
          <span className="text-sm text-gray-500 font-bold">
            {rental.start_date}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Rental End Date</span>
          <span className="text-sm text-gray-500 font-bold">
            {rental.end_date}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Total payment</span>
          <span className="text-sm text-gray-500 font-bold">
            {rental.total_payment}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Status</span>
          <StatusBadge status={rental.rental_status} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end order-1 md:order-2">
        <Image
          src={`${STRAPI_URL}${rental.car.images[0].url}`}
          alt={rental.car.brand.name}
          width={rental.car.images[0].width}
          height={rental.car.images[0].height}
          className="w-full h-auto md:w-32 md:h-32 object-cover rounded-lg"
        />
        <p className="text-lg font-bold mt-2">${rental.car.price_per_day}</p>
      </div>
    </Link>
  );
}
