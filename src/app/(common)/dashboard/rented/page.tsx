import RentedCarItem from "@/components/rented/rented-car-item";
import { getRentals } from "@/data/rent";
import { Rental } from "@/types";

export default async function RentedPage() {
  const data = (await getRentals()) as { data: Rental[] };
  return (
    <div className="p-4 md:p-8 flex flex-col">
      <h1 className="text-2xl font-bold">My Rented cars</h1>
      <div className="p-4 flex flex-col rounded-md space-y-2">
        {data.data.map((rental) => (
          <RentedCarItem key={rental.documentId} rental={rental} />
        ))}
      </div>
    </div>
  );
}
