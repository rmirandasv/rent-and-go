import qs from "qs";
import { STRAPI_API_URL, STRAPI_API_TOKEN } from "@/config/strapi";
import { Car } from "@/types";

const getCars = async () => {
  const query = qs.stringify({
    populate: {
      model: {
        fields: ["name"],
        populate: {
          brand: {
            fields: ["name"],
            populate: {
              logo: {
                fields: ["url", "width", "height"],
              },
            },
          },
        },
      },
      images: {
        fields: ["url", "width", "height"],
      },
    },
  });

  const res = await fetch(`${STRAPI_API_URL}/cars?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  const data = await res.json();

  return data;
};

const getCar = async (id: string): Promise<Car> => {
  const query = qs.stringify({
    populate: {
      model: {
        fields: ["name"],
        populate: {
          brand: {
            fields: ["name"],
            populate: {
              logo: {
                fields: ["url", "width", "height"],
              },
            },
          },
        },
      },
      images: {
        fields: ["url", "width", "height"],
      },
    },
  });

  const res = await fetch(`${STRAPI_API_URL}/cars/${id}?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  const data = await res.json();

  return data.data;
};

const getFeaturedCars = async () => {
  const query = qs.stringify({
    filters: {
      featured: {
        $eq: true,
      }
    },
    populate: {
      model: {
        fields: ["name"],
        populate: {
          brand: {
            fields: ["name"],
            populate: {
              logo: {
                fields: ["url", "width", "height"],
              },
            },
          },
        },
      },
      images: {
        fields: ["url", "width", "height"],
      },
    },
  });

  const res = await fetch(`${STRAPI_API_URL}/cars?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  const data = await res.json();

  return data;
}

export { getCars, getCar, getFeaturedCars };
