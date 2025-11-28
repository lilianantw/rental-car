import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero.jpg"
        alt="Rental car on the highway"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Find your perfect rental car</h1>

        <p className={styles.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>

        <Link href="/catalog" className={styles.linkReset}>
          <Button variant="primary" size="large">
            View Catalog
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
