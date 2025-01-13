import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const brands = [
  { id: 1, name: "Brand A", carCount: 10 },
  { id: 2, name: "Brand B", carCount: 15 },
  { id: 3, name: "Brand C", carCount: 8 },
  { id: 4, name: "Brand D", carCount: 12 },
  { id: 5, name: "Brand E", carCount: 7 },
  { id: 6, name: "Brand F", carCount: 9 },
];

export default function BrandsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <Card key={brand.id}>
            <CardHeader>
              <CardTitle>{brand.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=100&width=200"
                alt={brand.name}
                width={200}
                height={100}
                className="rounded-md mb-4"
              />
              <p className="text-muted-foreground">
                {brand.carCount} cars available
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/brands/${brand.id}`}
                className="text-primary hover:underline"
              >
                View Cars
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
