"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./RentForm.module.css";
import Notification from "@/components/ui/Button/Notification/Notification";

export default function RentForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const [success, setSuccess] = useState(false);

  const dateRef = useRef<HTMLInputElement | null>(null);

  const openCalendar = () => {
    dateRef.current?.showPicker();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess(true);

    setNameValue("");
    setEmailValue("");
    setDateValue("");
    setCommentValue("");
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Book your car now</h2>
      <p className={styles.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
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
          <span
            className={
              dateValue ? styles.placeholderHidden : styles.fakePlaceholder
            }
          >
            Booking date*
          </span>

          <input
            type="date"
            ref={dateRef}
            className={styles.hiddenDateInput}
            onChange={(e) => {
              const isoDate = e.target.value;
              if (isoDate) {
                const [year, month, day] = isoDate.split("-");
                setDateValue(`${day}.${month}.${year}`);
              } else {
                setDateValue("");
              }
            }}
            aria-hidden="true"
          />

          <input
            type="text"
            className={`${styles.realInput} ${styles.realInputDate}`}
            value={dateValue}
            readOnly
            onClick={openCalendar}
            aria-label="Booking date"
          />

          <Image
            src="/calendar.svg"
            alt="Open calendar"
            width={18}
            height={18}
            className={styles.calendarIcon}
            onClick={openCalendar}
          />
        </div>

        {/* COMMENT */}
        <div className={styles.fakeInputWrapper}>
          <span
            className={
              commentValue
                ? styles.placeholderHidden
                : `${styles.fakePlaceholder} ${styles.textareaPlaceholder}`
            }
          >
            Comment
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

      {success && (
        <Notification
          message="Car successfully booked!"
          onClose={() => setSuccess(false)}
        />
      )}
    </div>
  );
}
