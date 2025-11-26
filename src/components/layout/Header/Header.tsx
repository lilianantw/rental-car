import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.navWrapper}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="RentalCar logo"
              width={104}
              height={16}
            />
          </Link>

          <nav>
            <ul className={css.navigation}>
              <li>
                <Link href="/" className={css.list}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/catalog" className={css.list}>
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

