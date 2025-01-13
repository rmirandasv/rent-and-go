import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car } from "@/types";
import { STRAPI_URL } from "@/config/strapi";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Card key={car.id}>
      <CardHeader>
        <CardTitle>{car.model.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={`${STRAPI_URL}${car.images[0].url}`}
          alt={car.model.name}
          width={car.images[0].width}
          height={car.images[0].height}
          className="rounded-md mb-4"
        />
        <p className="text-muted-foreground">Brand: {car.model.brand.name}</p>
        <p className="text-muted-foreground">Model: {car.model.name}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-lg font-semibold">${car.price_per_day}/day</span>
        <Button asChild>
          <Link href={`/cars/${car.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
