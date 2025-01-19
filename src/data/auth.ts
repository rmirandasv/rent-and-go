import { cookies } from "next/headers";
import { STRAPI_URL, STRAPI_API_TOKEN } from "@/config/strapi";
import { User } from "@/types";

export async function getAuthToken() {
  const authToken = (await cookies()).get("jwt")?.value;
  return authToken;
}

export async function getAuthUser() {
  const path = "/api/users/me";

  const url = new URL(path, STRAPI_URL);

  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-cache",
    });
    const data = await response.json();
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    return { ok: false, data: null, error: error };
  }
}

export async function updateUser({
  name,
  phone,
}: {
  name: string;
  phone: string;
}) {
  const { data: user } = await getAuthUser() as { data: User };

  if (!user) {
    throw new Error("User not found");
  }

  const path = `/api/users/${user.id}`;
  const data = { name, phone };

  const res = await fetch(new URL(path, STRAPI_URL).href, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  console.log(json);

  return json;
}
