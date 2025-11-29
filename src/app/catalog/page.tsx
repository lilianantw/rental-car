import CatalogPageClient from "./CatalogPageClient";

export const metadata = {
  title: "Car Catalog — RentalCar",
  description:
    "Browse all rental cars. Filter by brand, price and mileage. Find your perfect car.",
};

export default function CatalogPage() {
  return <CatalogPageClient />;
}