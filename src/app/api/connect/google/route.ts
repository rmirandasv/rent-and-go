import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { STRAPI_API_URL } from "@/config/strapi";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.DOMAIN ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("access_token");

  if (!token) return NextResponse.redirect(new URL("/", request.url));

  const path = `/auth/google/callback`;

  const url = new URL(STRAPI_API_URL + path);
  url.searchParams.append("access_token", token);

  const res = await fetch(url.href);
  const data = await res.json();

  console.log("data", data);

  (await cookies()).set("jwt", data.jwt, config);

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
