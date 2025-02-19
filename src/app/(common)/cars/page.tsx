import { Car } from "@/types";
import { getCars } from "@/data/car";
import CarCard from "@/components/car-card/car-card";

export default async function CarsPage() {
  const apiCars = await getCars();
  return (
    <div className="px-4 md:px-8 lg:px-10 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
        {apiCars.data.map((car: Car) => (
          <CarCard key={car.documentId} car={car} />
        ))}
      </div>
    </div>
  );
}
