import { fetchCarById } from "@/services/api/carsApi";
import CarDetails from "@/components/car-details/CarDetails";
import type { Car } from "@/types/car.types";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CarDetailsPage(props: Props) {
  const { id } = await props.params;

  const car: Car = await fetchCarById(id);

  if (!car) {
    return <div style={{ padding: "40px" }}>Car not found</div>;
  }

  return <CarDetails car={car} />;
}
