"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./RentForm.module.css";

export default function RentForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const dateInputRef = useRef<HTMLInputElement>(null);

  return (
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

          <span
            className={`${styles.fakePlaceholder} ${
              dateValue ? styles.hidden : ""
            }`}
          >
            Booking date
          </span>

          <input
            ref={dateInputRef}
            type="date"
            className={`${styles.realInput} ${styles.realInputDate} ${
              dateValue ? styles.filled : ""
            }`}
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
          />

          <Image
            src="/calendar.svg"
            alt="calendar"
            width={18}
            height={18}
            className={styles.calendarIcon}
            onClick={() => dateInputRef.current?.showPicker()}
          />
        </div>

        {/* COMMENT */}
        <div className={styles.fakeInputWrapper}>
          <span className={styles.fakePlaceholder}>Comment</span>

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
  );
}
