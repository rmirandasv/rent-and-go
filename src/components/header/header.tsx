import Link from "next/link";
import UserMenu from "./user-menu";

export function Header() {
  return (
    <header className="px-4 md:px-8 lg:px-10 bg-background border-b">
      <div className="flex items-center justify-between py-4">
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
        <div className="flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
