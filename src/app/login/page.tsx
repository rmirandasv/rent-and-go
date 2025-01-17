import logo from "@/app/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "@/config/strapi";
import google from "./google.svg";

export default async function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <Image
        src={logo}
        alt="Logo"
        width={200}
        height={200}
        className="rounded-full"
      />
      <Link
        href={`${STRAPI_URL}/api/connect/google`}
        className="mt-8 p-4 bg-white border border-gray-300 text-center rounded-lg text-lg uppercase font-bold flex items-center space-x-4 shadow hover:shadow-lg"
      >
        <Image src={google} alt="Google" width={24} height={24} />
        <span>Login with Google</span>
      </Link>
    </div>
  );
}
