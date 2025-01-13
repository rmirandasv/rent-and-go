import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const models = [
  { id: 1, name: "Model X", brand: "Brand A", carCount: 5 },
  { id: 2, name: "Model Y", brand: "Brand B", carCount: 3 },
  { id: 3, name: "Model Z", brand: "Brand C", carCount: 7 },
  { id: 4, name: "Model W", brand: "Brand D", carCount: 4 },
  { id: 5, name: "Model V", brand: "Brand E", carCount: 6 },
  { id: 6, name: "Model U", brand: "Brand F", carCount: 2 },
];

export default function ModelsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Car Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((model) => (
          <Card key={model.id}>
            <CardHeader>
              <CardTitle>{model.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=150&width=250"
                alt={model.name}
                width={250}
                height={150}
                className="rounded-md mb-4"
              />
              <p className="text-muted-foreground">Brand: {model.brand}</p>
              <p className="text-muted-foreground">
                {model.carCount} cars available
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/models/${model.id}`}
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
