import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import qs from "qs";

type Brand = {
  id: number;
  name: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
};

const strapiBaseUrl = process.env.STRAPI_URL;

const getBrands = async () => {
  const strapiUrl = process.env.STRAPI_API_URL;
  const strapiToken = process.env.STRAPI_API_TOKEN;
  const query = qs.stringify({
    populate: {
      logo: {
        fields: ["url", "width", "height"],
      },
    },
  });
  const response = await fetch(`${strapiUrl}/brands?${query}`, {
    headers: {
      Authorization: `Bearer ${strapiToken}`,
    },
  });
  return await response.json();
};

export default async function BrandsPage() {
  const brands = await getBrands();
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.data.map((brand: Brand) => (
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
        ))}
      </div>
    </div>
  );
}
