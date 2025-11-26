"use client";

import { useState } from "react";
import styles from "./Select.module.css";

type Option = string;

type Props = {
  label: string;
  options: Option[];
  value: Option | null;
  onChange: (value: Option) => void;
  placeholder: string;
};

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}

      <button
        type="button"
        className={styles.select}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? styles.value : styles.placeholder}>
          {value ?? placeholder}
        </span>
      </button>

      {open && (
        <ul className={styles.dropdown}>
          {options.map((opt) => (
            <li
              key={opt}
              className={styles.option}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
