import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brand } from "@/types";
import { CarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const strapiBaseUrl = process.env.STRAPI_URL;

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Card key={brand.id} className="w-fit">
      <CardHeader>
        <Image
          src={`${strapiBaseUrl}${brand.logo.url}`}
          alt={brand.name}
          width={brand.logo.width}
          height={brand.logo.height}
          className="size-60 aspect-square"
        />
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <CardTitle>{brand.name}</CardTitle>
        <div className="flex items-center space-x-1">
          <span>{brand.cars.length}</span>
          <CarIcon size={24} />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Link href={`/brands/${brand.id}`} className="transition ease-in-out p-2 bg-transparent border border-transparent hover:bg-indigo-100 hover:text-indigo-600 hover:border-indigo-600 rounded-md duration-150">
          View Cars
        </Link>
      </CardFooter>
    </Card>
  );
}
