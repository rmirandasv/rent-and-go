import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Rent and Go
        </Link>
        <nav>
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
        <Button>Book Now</Button>
      </div>
    </header>
  );
}
