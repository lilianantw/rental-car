"use client";

import styles from "./Input.module.css";

type Props = {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
};

export default function Input({ label, value, onChange, placeholder }: Props) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

    <input
    type="text"
      className={styles.input}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value || null)}
      placeholder={placeholder}
    />

    </div>
  );
}
