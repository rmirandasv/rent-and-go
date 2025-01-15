import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import landingImage from "./landing-image.jpg";
import { getFeaturedCars } from "@/data/car";
import { Car } from "@/types";
import CarCard from "@/components/car-card/car-card";

function HeroSection() {
  return (
    <section className="px-4 md:px-8 lg:px-10 bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Drive Your Dreams</h1>
            <p className="text-xl mb-6">Rent the perfect car for your next adventure</p>
            <Button size="lg" asChild className="p-9 bg-gradient-to-r from-gray-500 to-gray-700 text-2xl uppercase">
              <Link href="/cars">Explore Cars</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src={landingImage}
              alt="Rent and Go landing image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

async function FeaturedCars() {
  const featuredCars = await getFeaturedCars();

  return (
    <section className="px-4 md:px-8 lg:px-10 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.data.map((car: Car) => (
            <CarCard key={car.documentId} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedCars />
    </div>
  );
}
