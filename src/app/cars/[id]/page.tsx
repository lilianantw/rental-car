import CarDetails from "@/components/car-details/CarDetails";
import { fetchCarById } from "@/services/api/carsApi";
import type { Car } from "@/types/car.types";

type CarDetailsPageProps = {
  params: {
    id: string;
  };
};

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = params;

  // запрос к API
  const car: Car = await fetchCarById(id);

  return <CarDetails car={car} />;
}
