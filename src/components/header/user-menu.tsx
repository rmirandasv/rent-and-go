import { getAuthUser } from "@/data/auth";
import { UserIcon } from "lucide-react";
import { User } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STRAPI_URL } from "@/config/strapi";
import Image from "next/image";
import google from "./google.svg";
import Link from "next/link";

export default async function UserMenu() {
  const { data } = (await getAuthUser()) as { data: User };

  if (!data) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger title="Register / Login">
          <div className="py-2 px-4 flex items-center space-x-1">
            <UserIcon className="size-5 md:size-6" />
            <span className="text-xs md:text-sm font-semibold">Guest</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 md:w-72">
          <DropdownMenuItem className="p-0">
            <Link
              href={`${STRAPI_URL}/api/connect/google`}
              className="p-2 md:p-4 w-full bg-white text-center text-base md:text-lg flex items-center justify-center space-x-4"
            >
              <Image src={google} alt="Google" width={24} height={24} />
              <span>Login with Google</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="py-2 px-4 flex items-center space-x-2">
      <UserIcon size={24} />
      <span className="text-xs md:text-sm font-semibold truncate">{data.name || data.username}</span>
    </div>
  );
}
