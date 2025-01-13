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

// This would typically come from your Strapi API
const cars = [
  {
    id: 1,
    name: "Luxury Sedan",
    brand: "Brand A",
    model: "Model X",
    price: 100,
  },
  { id: 2, name: "Sports Car", brand: "Brand B", model: "Model Y", price: 150 },
  { id: 3, name: "SUV", brand: "Brand C", model: "Model Z", price: 120 },
  { id: 4, name: "Compact Car", brand: "Brand D", model: "Model W", price: 80 },
  {
    id: 5,
    name: "Electric Car",
    brand: "Brand E",
    model: "Model V",
    price: 110,
  },
  {
    id: 6,
    name: "Convertible",
    brand: "Brand F",
    model: "Model U",
    price: 140,
  },
];

export default function CarsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id}>
            <CardHeader>
              <CardTitle>{car.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt={car.name}
                width={300}
                height={200}
                className="rounded-md mb-4"
              />
              <p className="text-muted-foreground">Brand: {car.brand}</p>
              <p className="text-muted-foreground">Model: {car.model}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-lg font-semibold">${car.price}/day</span>
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
