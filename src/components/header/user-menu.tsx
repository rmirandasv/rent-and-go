import { getAuthUser } from "@/data/auth";
import { UserIcon } from "lucide-react";
import { User } from "@/types";
import { LogoutButton } from "../auth/logout-button";

export default async function UserMenu() {
  const { data } = await getAuthUser() as { data: User };

  if (!data) return null;

  return (
    <div className="py-2 px-4 flex items-center space-x-2">
      <UserIcon size={24} />
      <span className="text-sm font-semibold">{data.username}</span>
      <LogoutButton />
    </div>
  );
}
