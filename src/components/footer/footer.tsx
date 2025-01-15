import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 md:px-8 lg:px-10 bg-background border-t mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              Rent and Go provides top-quality rental cars for your travel needs.
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
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Email: info@rentandgo.com</p>
            <p className="text-muted-foreground">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          © 2025 Rent and Go. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
