import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCar } from "@/data/car";
import Image from "next/image";
import { STRAPI_URL } from "@/config/strapi";
import Markdown from "react-markdown";
import Link from "next/link";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const car = await getCar(id);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 w-full md:1/2">
        <Carousel>
          <CarouselContent>
            {car.images.map((image) => (
              <CarouselItem key={image.id}>
                <Image
                  src={`${STRAPI_URL}${image.url}`}
                  width={image.width}
                  height={image.height}
                  alt={car.model.brand.name}
                  className="rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="p-4 md:px-20 w-full md:1/2 bg-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">{car.model.name}</h1>
          <span className="text-2xl font-bold text-green-600">${car.price_per_day} / day</span>
        </div>
        <h2 className="text-base text-gray-600">{car.model.brand.name}</h2>
        <Markdown className="p-4 bg-white mt-4 max-w-full w-full prose rounded-lg shadow">
          {car.description}
        </Markdown>
        <Link href={`/cars/${car.documentId}/rent`} className="block bg-green-600 text-white p-4 text-center rounded-lg mt-4 text-lg uppercase font-bold">
          Rent this car
        </Link>
      </div>
    </div>
  );
}
