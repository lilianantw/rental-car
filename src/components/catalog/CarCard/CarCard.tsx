"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CarCard.module.css";
import type { Car } from "@/types/car.types";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  const [city = "", countryRaw = ""] = car.address.split(",");
  const country = countryRaw.trim();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className={styles.card}>
      {/* фото + сердечко */}
      <div className={styles.imageWrapper}>
        {/* КАРТИНКА КЛИКАБЕЛЬНАЯ — ТОЛЬКО ОНА */}
        <Link href={`/cars/${car.id}`}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            fill
            className={styles.image}
          />
        </Link>

        {/* СЕРДЕЧКО НЕ ЛОМАЕТСЯ */}
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
        <Link href={`/cars/${car.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>
            {car.brand} {car.model},{" "}
            <span className={styles.year}>{car.year}</span>
          </h3>
        </Link>

        <span className={styles.price}>${car.rentalPrice}</span>
      </header>

      {/* первая строка */}
      <div className={styles.metaLine}>
        <span>{city.trim()}</span>
        <span>{country}</span>
      </div>

      {/* вторая строка */}
      <div className={styles.metaLine}>
        <span>{car.type}</span>
        <span>{car.mileage.toLocaleString("en-US")} km</span>
      </div>

      {/* кнопка Read more */}
      <Link href={`/cars/${car.id}`}>
        <button type="button" className={styles.button}>
          Read more
        </button>
      </Link>
    </article>
  );
}
