import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCar } from "@/data/car";
import Image from "next/image";
import { STRAPI_URL } from "@/config/strapi";
import Markdown from "react-markdown";
import RentACarForm from "@/components/form/rent-a-car-form";
import { getAuthUser } from "@/data/auth";
import { User } from "@/types";
import UserAccountForm from "@/components/form/user-account-form";

export default async function RentACarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const car = await getCar(id);
  const { data: user } = (await getAuthUser()) as { data: User };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 md:px-8 w-full md:1/2 flex flex-col order-2 md:order-1">
        {car.images && (
          <Carousel>
            <CarouselContent>
              {car.images.map((image) => (
                <CarouselItem key={image.id}>
                  <Image
                    src={`${STRAPI_URL}${image.url}`}
                    width={image.width}
                    height={image.height}
                    alt={car.model.brand.name}
                    className="rounded-md h-auto md:h-96"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
        {!car.images && (
          <div className="h-96 bg-gray-200 rounded-md flex content-center">
            <p className="text-muted-foreground text-center self-center w-full">
              No image available
            </p>
          </div>
        )}
        <div className="mt-4 flex-col md:flex-row flex items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={`${STRAPI_URL}${car.model.brand.logo.url}`}
              width={64}
              height={64}
              alt={car.model.brand.name}
            />
            <p>
              <span className="text-2xl font-bold">{car.model.brand.name}</span>
              &nbsp;-&nbsp;
              <span className="text-2xl font-bold">{car.model.name}</span>
            </p>
          </div>
          <span className="text-2xl text-gray-600">{car.year}</span>
        </div>
        <div className="mt-4 flex-col">
          <Markdown className="p-4 bg-white mt-4 max-w-full w-full prose rounded-lg shadow">
            {car.description}
          </Markdown>
        </div>
      </div>
      <div className="p-4 md:px-20 w-full md:1/2 bg-gray-200 order-1 md:order-2">
        <h3 className="text-2xl font-bold">Rent this car</h3>
        <p className="text-muted-foreground">
          Fill the form below to rent this car
        </p>
        <div className="p-4 bg-white mt-4  flex flex-col rounded-lg shadow">
          {user && (!user.name || !user.phone) && (
            <div className="p-4 bg-red-100 text-red-600 rounded-lg">
              <p className="text-lg font-bold">Please complete your profile</p>
              <p>
                You need to complete your profile before you can rent a car.
              </p>
              <UserAccountForm user={user} />
            </div>
          )}
          {user && user.name && user.phone && <RentACarForm car={car} name={user.name} phone={user.phone} />}
        </div>
      </div>
    </div>
  );
}
