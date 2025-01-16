"use client";

import { UserIcon } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="py-2 px-4 flex items-center space-x-2">
      <UserIcon size={24} />
      <span className="text-sm font-semibold">Ronald Miranda</span>
    </div>
  );
}
