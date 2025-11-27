"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./CarDetails.module.css";
import type { Car } from "@/types/car.types";

type Props = {
  car: Car;
};

export default function CarDetails({ car }: Props) {
  // КАСТОМНЫЕ плейсхолдеры
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  // Адрес
  const [city = "", countryRaw = ""] = car.address.split(",");
  const country = countryRaw.trim();

  // Условия аренды
  const conditions = car.rentalConditions ?? [];

  // Аксессуары
  const accessoriesList = [
    ...(car.accessories ?? []),
    ...(car.functionalities ?? []),
  ];

  // Пробег
  const formattedMileage = car.mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

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

            {/* ФОРМА */}
            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>Book your car now</h2>
              <p className={styles.formSubtitle}>
                Stay connected! We are always ready to help you.
              </p>

              <form className={styles.form}>

                {/* NAME */}
                <div className={styles.fakeInputWrapper}>
                  <span className={styles.fakePlaceholder}>
                    {nameValue ? "Name" : "Name*"}
                  </span>

                  <input
                    className={`${styles.realInput} ${styles.realInputName}`}
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className={styles.fakeInputWrapper}>
                  <span className={styles.fakePlaceholder}>
                    {emailValue ? "Email" : "Email*"}
                  </span>

                  <input
                    className={`${styles.realInput} ${styles.realInputEmail}`}
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    required
                  />
                </div>

                {/* DATE */}
                <div className={styles.fakeInputWrapper}>
                  <span className={styles.fakePlaceholder}>
                    {dateValue ? "Booking date" : "Booking date"}
                  </span>

                  <input
                    className={styles.realInput}
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}
                  />
                </div>

                {/* COMMENT */}
                <div className={styles.fakeInputWrapper}>
                  <span className={styles.fakePlaceholder}>
                    {commentValue ? "Comment" : "Comment"}
                  </span>

                  <textarea
                    className={`${styles.realInput} ${styles.textarea}`}
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send
                </button>

              </form>
            </div>
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
                  Mileage: {formattedMileage} km
                </span>
              </div>

              <p className={styles.price}>{car.rentalPrice}</p>

              <p className={styles.description}>{car.description}</p>
            </div>

            <div className={styles.sections}>

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
