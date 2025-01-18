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
import RentCarLink from "@/components/rent-car-link/rent-car-link";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const car = await getCar(id);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 md:px-8 w-full md:1/2 flex flex-col">
        {car.images && (
          <Carousel>
            <CarouselContent>
              {car.images.map((image) => (
                <CarouselItem key={image.id}>
                  <Image
                    src={`${STRAPI_URL}${image.url}`}
                    width={image.width}
                    height={image.height}
                    alt={car.model.brand.name}
                    className="rounded-md h-96"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
        {!car.images && (
          <div className="h-96 bg-gray-200 rounded-md flex content-center">
            <p className="text-muted-foreground text-center self-center w-full">
              No image available
            </p>
          </div>
        )}
        <div className="mt-4 flex-col md:flex-row flex items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={`${STRAPI_URL}${car.model.brand.logo.url}`}
              width={64}
              height={64}
              alt={car.model.brand.name}
            />
            <p>
              <span className="text-2xl font-bold">{car.model.brand.name}</span>
              &nbsp;-&nbsp;
              <span className="text-2xl font-bold">{car.model.name}</span>
            </p>
          </div>
          <span className="text-2xl text-gray-600">{car.year}</span>
        </div>
      </div>
      <div className="p-4 md:px-20 w-full md:1/2 bg-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">{car.model.name}</h1>
          <span className="text-2xl font-bold text-green-600">
            ${car.price_per_day} / day
          </span>
        </div>
        <h2 className="text-base text-gray-600">{car.model.brand.name}</h2>
        <Markdown className="p-4 bg-white mt-4 max-w-full w-full prose rounded-lg shadow mb-4">
          {car.description}
        </Markdown>
        <RentCarLink car={car} />
      </div>
    </div>
  );
}
