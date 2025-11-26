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
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <label className={styles.label}>Car brand</label>

        <div
          className={styles.select}
          onClick={() => onBrandChange(brand === "BMW" ? null : "BMW")}
        >
          <span>{brand ?? "Choose a brand"}</span>
          <Image src="/vector.svg" alt="arrow" width={13} height={7} />
        </div>
      </div>

      <div className={styles.block}>
        <label className={styles.label}>Price 1 hour</label>

        <div
          className={styles.select}
          onClick={() => onPriceChange(price === "50" ? null : "50")}
        >
          <span>{price ?? "Choose a price"}</span>
          <Image src="/vector.svg" alt="arrow" width={13} height={7} />
        </div>
      </div>

      <div className={styles.mileageBox}>
        <div className={styles.mileageField}>
          <span className={styles.mileageText}>From</span>
          <input
            type="number"
            className={styles.mileageInput}
            value={mileageFrom ?? ""}
            onChange={(e) => onMileageFromChange(e.target.value)}
          />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.mileageField}>
          <span className={styles.mileageText}>To</span>
          <input
            type="number"
            className={styles.mileageInput}
            value={mileageTo ?? ""}
            onChange={(e) => onMileageToChange(e.target.value)}
          />
        </div>
      </div>

      <button className={styles.searchBtn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
