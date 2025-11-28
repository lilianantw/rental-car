"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CarCard.module.css";
import type { Car } from "@/types/car.types";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { formatMileage } from "@/utils/formatMileage";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  const [city = "", countryRaw = ""] = car.address.split(",");
  const country = countryRaw.trim();

  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const fav = isFavorite(car.id);

  return (
    <article className={styles.card}>
      {/* фото + сердечко */}
      <div className={styles.imageWrapper}>
        <Link href={`/catalog/${car.id}`}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            fill
            className={styles.image}
          />
        </Link>

        <button
          type="button"
          className={styles.favBtn}
          onClick={() => toggleFavorite(car.id)}
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        >
          <Image
            src={fav ? "/heart-filled.svg" : "/heart.svg"}
            alt="favorite"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* заголовок + цена */}
      <header className={styles.header}>
        <Link href={`/catalog/${car.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>
            {car.brand} {car.model},{" "}
            <span className={styles.year}>{car.year}</span>
          </h3>
        </Link>

        <span className={styles.price}>{car.rentalPrice}</span>
      </header>

      {/* адрес */}
      <div className={styles.metaLine}>
        <span>{city.trim()}</span>
        <span>{country}</span>
      </div>

      {/* тип и пробег */}
      <div className={styles.metaLine}>
        <span>{car.type}</span>
        <span>{formatMileage(car.mileage)} km</span>
      </div>

      {/* кнопка */}
      <Link href={`/catalog/${car.id}`}>
        <button type="button" className={styles.button}>
          Read more
        </button>
      </Link>
    </article>
  );
}

