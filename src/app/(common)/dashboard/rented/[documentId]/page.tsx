import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { STRAPI_URL } from "@/config/strapi";
import { getRented } from "@/data/rent";
import { Rental } from "@/types";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const StatusBadge = ({
  status,
}: {
  status: "pending" | "approved" | "cancelled" | "in_progress" | "completed";
}) => {
  const statusColor = {
    pending: "bg-yellow-600",
    approved: "bg-green-600",
    cancelled: "bg-red-600",
    in_progress: "bg-blue-600",
    completed: "bg-gray-600",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-white text-sm ${
        statusColor[status] as string
      }`}
    >
      {status}
    </span>
  );
};

export default async function RentedRentDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ documentId: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const documentId = (await params).documentId;
  const success = (await searchParams).success;
  const rented = (await getRented({ documentId })) as { data: Rental };
  return (
    <div className="flex flex-col">
      {success && (
        <div className="bg-green-600 text-white p-4 text-center">
          Rental request created successfully
        </div>
      )}
      <div className="p-4 md:px-8 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard/rented"
            className="flex items-center space-x-2"
          >
            <ArrowLeft size={24} />
            <span>See all rented cars</span>
          </Link>
          <h1 className="text-4xl font-bold">
            {rented.data.car.brand.name} {rented.data.car.model.name}
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:px-8 w-full md:1/2 flex flex-col">
          {rented.data.car.images && (
            <Carousel>
              <CarouselContent>
                {rented.data.car.images.map((image) => (
                  <CarouselItem key={image.id}>
                    <Image
                      src={`${STRAPI_URL}${image.url}`}
                      width={image.width}
                      height={image.height}
                      alt={rented.data.car.brand.name}
                      className="rounded-md h-96"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          {!rented.data.car.images && (
            <div className="h-96 bg-gray-200 rounded-md flex content-center">
              <p className="text-muted-foreground text-center self-center w-full">
                No image available
              </p>
            </div>
          )}
          <div className="mt-4 flex-col md:flex-row flex items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={`${STRAPI_URL}${rented.data.car.brand.logo.url}`}
                width={64}
                height={64}
                alt={rented.data.car.brand.name}
              />
              <p>
                <span className="text-2xl font-bold">
                  {rented.data.car.brand.name}
                </span>
                &nbsp;-&nbsp;
                <span className="text-2xl font-bold">
                  {rented.data.car.model.name}
                </span>
              </p>
            </div>
            <span className="text-2xl text-gray-600">
              {rented.data.car.year}
            </span>
          </div>
          <div className="mt-4 flex-col">
            <Markdown className="p-4 bg-white mt-4 max-w-full w-full prose rounded-lg shadow">
              {rented.data.car.description}
            </Markdown>
          </div>
        </div>
        <div className="p-4 md:px-8 w-full md:1/2 bg-gray-200">
          <h2 className="text-2xl font-bold">Rental details</h2>
          <div className="mt-4 flex-col">
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Car Brand</span>
              <span className="font-bold">{rented.data.car.brand.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Car Model</span>
              <span className="font-bold">{rented.data.car.model.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Year</span>
              <span className="font-bold">{rented.data.car.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">License Plate</span>
              <span className="font-bold">{rented.data.car.license_plate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Start Date</span>
              <span className="font-bold">{rented.data.start_date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">End Date</span>
              <span className="font-bold">{rented.data.end_date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Price per day</span>
              <span className="font-bold">{rented.data.car.price_per_day}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Total payment</span>
              <span className="font-bold">{rented.data.total_payment}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-600">Status</span>
              <StatusBadge status={rented.data.rental_status} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
