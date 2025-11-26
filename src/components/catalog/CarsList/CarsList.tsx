import styles from "./CarsList.module.css";
import CarCard from "@/components/catalog/CarCard/CarCard";
import type { Car } from "@/types/car.types";

type Props = {
  cars: Car[];
  onLoadMore: () => void;
  hasMore: boolean;
};

export default function CarsList({ cars, onLoadMore, hasMore }: Props) {
  return (
    <>
      <div className={styles.list}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}
