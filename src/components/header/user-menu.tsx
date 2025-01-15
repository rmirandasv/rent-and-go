"use client";

import { User } from "@/types";
import { UserIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
    async function fetchSession () {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      if (data?.user) {
        setUser(data.user);
      }
    }
    fetchSession();
  }, []);

  if (!user) return null;

  return (
    <div className="py-2 px-4 flex items-center space-x-2">
      <UserIcon size={24} />
      <span className="text-sm font-semibold">{user.name}</span>
      <button className="text-sm text-blue-600" onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
