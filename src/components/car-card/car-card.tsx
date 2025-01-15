import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Car } from "@/types";
import { STRAPI_URL } from "@/config/strapi";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Card key={car.documentId}>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Image
          src={`${STRAPI_URL}${car.model.brand.logo.url}`}
          alt={car.model.brand.name}
          width={car.model.brand.logo.width}
          height={car.model.brand.logo.height}
          className="size-6"
        />
        <CardTitle>{car.model.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {car.images && (
          <Carousel>
            <CarouselPrevious />
            <CarouselContent>
              {car.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`${STRAPI_URL}${image.url}`}
                    alt={car.model.name}
                    width={image.width}
                    height={image.height}
                    className="rounded-md h-64"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        )}
        {!car.images && (
          <div className="h-64 bg-gray-200 rounded-md flex content-center">
            <p className="text-muted-foreground text-center self-center w-full">
              No image available
            </p>
          </div>
        )}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="mt-4 text-muted-foreground">
            Brand: {car.model.brand.name}
          </p>
          <p className="text-muted-foreground">Model: {car.model.name}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-lg font-semibold">${car.price_per_day}/day</span>
        <Button asChild>
          <Link href={`/cars/${car.documentId}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
