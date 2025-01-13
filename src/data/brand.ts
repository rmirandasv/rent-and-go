import { STRAPI_API_URL, STRAPI_API_TOKEN } from "@/config/strapi";
import qs from "qs";

const getBrands = async () => {
  const query = qs.stringify({
    populate: {
      logo: {
        fields: ["url", "width", "height"],
      },
    },
  });
  const response = await fetch(`${STRAPI_API_URL}/brands?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });
  return await response.json();
};

export { getBrands };