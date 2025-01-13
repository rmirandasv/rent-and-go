import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              RentWheels provides top-quality rental cars for your travel needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
              <li>
                <Link href="/models" className="hover:text-primary">
                  Models
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Email: info@rentwheels.com</p>
            <p className="text-muted-foreground">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          © 2023 RentWheels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
