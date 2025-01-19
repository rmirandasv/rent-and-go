"use server";
import { Car } from "@/types";
import { STRAPI_API_URL, STRAPI_API_TOKEN } from "@/config/strapi";
import { getAuthUser } from "./auth";
import qs from "qs";

async function createRentACarRequest({
  car,
  formData,
}: {
  car: Car;
  formData: FormData;
}) {
  const { data: user } = await getAuthUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const startDate = new Date(formData.get("start_date") as string);
  const endDate = new Date(formData.get("end_date") as string);
  const pricePerDay = car.price_per_day;
  const days = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const totalPayment = pricePerDay * days;

  const data = {
    data: {
      start_date: startDate,
      end_date: endDate,
      total_payment: totalPayment,
      car: {
        connect: [car.documentId],
      },
      user: {
        connect: [user.documentId],
      },
    },
  };
  const res = await fetch(`${STRAPI_API_URL}/rentals`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error("json", await res.json());
    throw new Error("Failed to create rental request");
  }

  const json = await res.json();

  return json.data;
}

async function getRented({ documentId }: { documentId: string }) {
  const query = qs.stringify({
    populate: {
      car: {
        fields: ["price_per_day", "license_plate", "description", "year"],
        populate: {
          brand: {
            fields: ["name"],
            populate: {
              logo: {
                fields: ["url", "width", "height"],
              }
            }
          },
          model: {
            fields: ["name"],
          },
          images: {
            fields: ["url", "width", "height"],
          },
        }
      }
    }
  });

  const res = await fetch(`${STRAPI_API_URL}/rentals/${documentId}?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    console.error("json", await res.json());
    throw new Error("Failed to fetch rental request");
  }

  const json = await res.json();

  return json;
}

export { createRentACarRequest, getRented };
