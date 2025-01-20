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
import { Button } from "../ui/button";

const strapiBaseUrl = process.env.STRAPI_URL;

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Card key={brand.id} className="w-auto">
      <CardHeader>
        <div className="flex justify-center">
          <Image
            src={`${strapiBaseUrl}${brand.logo.url}`}
            alt={brand.name}
            width={brand.logo.width}
            height={brand.logo.height}
            className="size-60 aspect-square"
          />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <CardTitle>{brand.name}</CardTitle>
        <div className="flex items-center space-x-1">
          <span>{brand.cars.length}</span>
          <CarIcon size={24} />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Button asChild>
          <Link href={`/brands/${brand.documentId}`}>View Cars</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
