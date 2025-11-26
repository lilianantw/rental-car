"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CarCard.module.css";
import type { Car } from "@/types/car.types";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  // адрес: "Kyiv, Ukraine"
  const [city = "", countryRaw = ""] = car.address.split(",");
  const country = countryRaw.trim();

  // локальное избранное (позже заменим на стор)
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className={styles.card}>
      {/* фото */}
      <div className={styles.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          className={styles.image}
        />

        {/* сердечко */}
        <button
          type="button"
          className={styles.favBtn}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={
            isFavorite ? "Удалить из избранного" : "Добавить в избранное"
          }
        >
          <Image
            src={isFavorite ? "/heart-filled.svg" : "/heart.svg"}
            alt="favorite"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* заголовок + цена */}
      <header className={styles.header}>
        <h3 className={styles.title}>
          {car.brand} {car.model},{" "}
          <span className={styles.year}>{car.year}</span>
        </h3>

        <span className={styles.price}>${car.rentalPrice}</span>
      </header>

      {/* первая строка инфы */}
      <div className={styles.metaLine}>
        <span>{city.trim()}</span>
        <span>{country}</span>
      </div>

      {/* вторая строка инфы */}
      <div className={styles.metaLine}>
        <span>{car.type}</span>
        <span>{car.mileage.toLocaleString("en-US")} km</span>
      </div>

      {/* кнопка Read more */}
      <button type="button" className={styles.button}>
        Read more
      </button>
    </article>
  );
}
