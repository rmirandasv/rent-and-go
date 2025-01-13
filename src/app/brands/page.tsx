import { Brand } from "@/types";
import { getBrands } from "@/data/brand";
import BrandCard from "@/components/brand-card/brand-card";

export default async function BrandsPage() {
  const brands = await getBrands();
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.data.map((brand: Brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}
