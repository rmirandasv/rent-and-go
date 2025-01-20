import CarCard from "@/components/car-card/car-card";
import { getBrand } from "@/data/brand";
import { getCarsByBrand } from "@/data/car";
import { Car } from "@/types";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const brandId = (await params).documentId;
  const brand = await getBrand(brandId);
  const cars = await getCarsByBrand(brandId);
  return (
    <div className="px-4 md:px-8 lg:px-10 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        All {brand.data.name} Cars
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
        {cars.data.map((car: Car) => (
          <CarCard key={car.documentId} car={car} />
        ))}
      </div>
    </div>
  );
}
