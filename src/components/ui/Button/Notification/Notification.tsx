"use client";

import styles from "./Notification.module.css";

type Props = {
  message: string;
  onClose: () => void;
};

export default function Notification({ message, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <p className={styles.text}>{message}</p>

        <button className={styles.button} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
