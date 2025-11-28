import { useState } from "react";
import Image from "next/image";
import styles from "./Filters.module.css";

type FiltersProps = {
  brand: string | null;
  price: string | null;
  mileageFrom: string | null;
  mileageTo: string | null;

  onBrandChange: (value: string | null) => void;
  onPriceChange: (value: string | null) => void;
  onMileageFromChange: (value: string | null) => void;
  onMileageToChange: (value: string | null) => void;

  onSearch: () => void;
};

const BRAND_OPTIONS = [
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Toyota",
  "Honda",
  "Kia",
  "Hyundai",
  "Volkswagen",
  "Nissan",
  "Ford",
];

const PRICE_OPTIONS = ["10", "20", "30", "40", "50", "60", "70", "100", "150"];

export default function Filters({
  brand,
  price,
  mileageFrom,
  mileageTo,
  onBrandChange,
  onPriceChange,
  onMileageFromChange,
  onMileageToChange,
  onSearch,
}: FiltersProps) {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const handleBrandSelect = (value: string | null) => {
    onBrandChange(value);
    setIsBrandOpen(false);
  };

  const handlePriceSelect = (value: string | null) => {
    onPriceChange(value);
    setIsPriceOpen(false);
  };

  return (
    <div className={styles.wrapper}>

      {/* BRAND */}
      <div className={styles.block}>
        <label className={styles.label}>Car brand</label>

        <div
          className={styles.select}
          onClick={() => {
            setIsBrandOpen((prev) => !prev);
            setIsPriceOpen(false);
          }}
        >
          <span>{brand ?? "Choose a brand"}</span>
          <Image
            src="/vector.svg"
            alt="arrow"
            width={13}
            height={7}
            className={`${styles.arrow} ${isBrandOpen ? styles.arrowOpen : ""}`}
          />
        </div>

        {isBrandOpen && (
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.option} ${
                brand === null ? styles.optionActive : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleBrandSelect(null);
              }}
            >
              All brands
            </button>

            {BRAND_OPTIONS.map((item) => (
              <button
                type="button"
                key={item}
                className={`${styles.option} ${
                  brand === item ? styles.optionActive : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBrandSelect(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* PRICE */}
      <div className={styles.block}>
        <label className={styles.label}>Price 1 hour</label>

        <div
          className={styles.select}
          onClick={() => {
            setIsPriceOpen((prev) => !prev);
            setIsBrandOpen(false);
          }}
        >
          <span>{price ? `Up to $${price}` : "Choose a price"}</span>
          <Image
            src="/vector.svg"
            alt="arrow"
            width={13}
            height={7}
            className={`${styles.arrow} ${isPriceOpen ? styles.arrowOpen : ""}`}
          />
        </div>

        {isPriceOpen && (
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.option} ${
                price === null ? styles.optionActive : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handlePriceSelect(null);
              }}
            >
              Any price
            </button>

            {PRICE_OPTIONS.map((item) => (
              <button
                type="button"
                key={item}
                className={`${styles.option} ${
                  price === item ? styles.optionActive : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePriceSelect(item);
                }}
              >
                Up to ${item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MILEAGE */}
      <div className={styles.mileageBox}>
        <div className={styles.mileageField}>
          <span className={styles.mileageText}>From</span>
          <input
            type="number"
            className={styles.mileageInput}
            value={mileageFrom ?? ""}
            onChange={(e) => onMileageFromChange(e.target.value || null)}
          />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.mileageField}>
          <span className={styles.mileageText}>To</span>
          <input
            type="number"
            className={styles.mileageInput}
            value={mileageTo ?? ""}
            onChange={(e) => onMileageToChange(e.target.value || null)}
          />
        </div>
      </div>

      <button className={styles.searchBtn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
