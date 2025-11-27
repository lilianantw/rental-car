import CarDetails from "@/components/car-details/CarDetails";
import { fetchCarById } from "@/services/api/carsApi";
import type { Car } from "@/types/car.types";

type Props = {
  params: Promise<{ id: string }>; 
};

export default async function CarDetailsPage({ params }: Props) {
  const { id } = await params;

  const car: Car = await fetchCarById(id);

  return <CarDetails car={car} />;
}
