import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Drive Your Dreams</h1>
            <p className="text-xl mb-6">Rent the perfect car for your next adventure</p>
            <Button size="lg" asChild>
              <Link href="/cars">Explore Cars</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Luxury car"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCars() {
  const featuredCars = [
    { id: 1, name: "Luxury Sedan", brand: "Brand A", price: 100 },
    { id: 2, name: "Sports Car", brand: "Brand B", price: 150 },
    { id: 3, name: "SUV", brand: "Brand C", price: 120 },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
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
