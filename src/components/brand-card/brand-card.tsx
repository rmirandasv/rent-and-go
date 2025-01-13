import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brand } from "@/types";
import Image from "next/image";
import Link from "next/link";

const strapiBaseUrl = process.env.STRAPI_URL;

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Card key={brand.id}>
      <CardHeader>
        <CardTitle>{brand.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={`${strapiBaseUrl}${brand.logo.url}`}
          alt={brand.name}
          width={brand.logo.width}
          height={brand.logo.height}
          className="rounded-md mb-4"
        />
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
  )
}
