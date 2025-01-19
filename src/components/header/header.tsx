import Link from "next/link";
import UserMenu from "./user-menu";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "../auth/logout-button";

export function Header() {
  return (
    <header className="px-4 md:px-8 lg:px-10 bg-background border-b flex flex-col">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold">
          Rent and Go
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/brands" className="hover:text-primary">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/cars" className="hover:text-primary">
                Cars
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-1">
          <UserMenu />
          <div className="hidden md:flex">
            <LogoutButton />
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu size="24" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/brands">Brands</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/cars">Cars</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
