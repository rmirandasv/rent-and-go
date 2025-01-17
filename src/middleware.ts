import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthUser } from "@/data/auth";

export async function middleware(request: NextRequest) {
  const user = await getAuthUser();
  const currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith("/dashboard") && user.ok === false) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}