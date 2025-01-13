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
import qs from "qs";
import { STRAPI_URL, STRAPI_API_URL, STRAPI_API_TOKEN } from "@/config/strapi";
import { Car } from "@/types";

const getCars = async () => {
  const query = qs.stringify({
    populate: {
      model: {
        fields: ["name"],
        populate: {
          brand: {
            fields: ["name"],
          },
        },
      },
      images: {
        fields: ["url", "width", "height"],
      },
    }
  });

  const res = await fetch(`${STRAPI_API_URL}/cars?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  const data = await res.json();

  return data;
}

export default async function CarsPage() {
  const apiCars = await getCars();
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {apiCars.data.map((car: Car) => (
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
              <span className="text-lg font-semibold">$120/day</span>
              <Button asChild>
                <Link href={`/cars/${car.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
