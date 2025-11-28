"use client";

import Image from "next/image";
import styles from "./CarDetails.module.css";
import type { Car } from "@/types/car.types";
import RentForm from "@/components/car/RentForm/RentForm";
import { formatMileage } from "@/utils/formatMileage";

type Props = {
  car: Car;
};

export default function CarDetails({ car }: Props) {
  const [city = "", countryRaw = ""] = car.address.split(",");
  const country = countryRaw.trim();

  const conditions = car.rentalConditions ?? [];

  const accessoriesList = [
    ...(car.accessories ?? []),
    ...(car.functionalities ?? []),
  ];

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.layout}>

          {/* ЛЕВАЯ КОЛОНКА */}
          <div className={styles.leftColumn}>

            {/* Фото */}
            <div className={styles.imageWrapper}>
              <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                fill
                className={styles.image}
                priority
              />
            </div>

            {/* Форма — БЕЗ ПРОПСОВ */}
            <RentForm />
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className={styles.rightColumn}>
            <div className={styles.mainInfo}>

              <div className={styles.titleRow}>
                <h1 className={styles.title}>
                  {car.brand} {car.model}, {car.year}
                </h1>

                <span className={styles.idText}>
                  Id: {car.id.slice(0, 4)}
                </span>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <Image src="/location.svg" alt="" width={16} height={16} />
                  {city}, {country}
                </span>

                <span className={styles.metaDot} />

                <span className={styles.metaItem}>
                  Mileage: {formatMileage(car.mileage)} km
                </span>
              </div>

              <p className={styles.price}>{car.rentalPrice}</p>
              <p className={styles.description}>{car.description}</p>
            </div>

            <div className={styles.sections}>

              {/* Условия */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Rental Conditions:</h3>
                <ul className={styles.list}>
                  {conditions.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <Image src="/check-circle.svg" alt="" width={16} height={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Характеристики */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Car Specifications:</h3>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Image src="/calendar.svg" width={16} height={16} alt="" />
                    <span>Year: {car.year}</span>
                  </li>

                  <li className={styles.listItem}>
                    <Image src="/car.svg" width={16} height={16} alt="" />
                    <span>Type: {car.type}</span>
                  </li>

                  <li className={styles.listItem}>
                    <Image src="/fuel-pump.svg" width={16} height={16} alt="" />
                    <span>Fuel Consumption: {car.fuelConsumption}</span>
                  </li>

                  <li className={styles.listItem}>
                    <Image src="/gear.svg" width={16} height={16} alt="" />
                    <span>Engine Size: {car.engineSize}</span>
                  </li>
                </ul>
              </div>

              {/* Аксессуары */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Accessories and functionalities:
                </h3>

                <ul className={styles.list}>
                  {accessoriesList.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <Image src="/check-circle.svg" width={16} height={16} alt="" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
