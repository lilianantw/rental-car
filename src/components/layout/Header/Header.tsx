// components/Header/Header.tsx
import Image from "next/image";
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
    <div className="container">
        <div className={css.navWrapper}>
         <Image
            src="/logo.svg"
            alt="RentalCar logo"
            width={104}
            height={16}
         />

         <nav>
             <ul className={css.navigation}>
                 <li className={css.list}>Home</li>
                <li className={css.list}>Catalog</li>
             </ul>
         </nav>
         </div>
    </div>
    </header>
  );
};

export default Header;
