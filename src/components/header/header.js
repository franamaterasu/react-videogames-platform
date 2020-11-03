import React from "react";
import {Link} from "react-router-dom";
import { FaHouseDamage, FaBurn, FaMale, FaAlignJustify } from "react-icons/fa";

import styles from "./header.module.scss";

const Header = props => {
  // Constante para obtener la longitud de la lista de favoritos y mostrarlo
  const {favouritesCount, handleNav, nav} = props;

  return (
    <>
    <header className={styles.container}>
      <Link to="/" className={styles.logo}>muzk</Link>
      {nav &&
         <nav className={styles.nav}>
         <Link to="/" className={styles.nav__item}>
          <FaHouseDamage className={styles.nav__item__icon} />
          <span className={styles.nav__item__text}>Home</span>
        </Link>
        <Link to="/favourites" className={styles.nav__item}>
          <FaBurn className={styles.nav__item__icon} />
          <span className={styles.nav__item__text}>Favourites</span>
          {
            favouritesCount.length > 0 ? <div className={styles.nav__item__circle}>{favouritesCount.length}</div> : ''
          }
        </Link>
         <Link to="/profile" className={styles.nav__item}>
          <FaMale className={styles.nav__item__icon} />
          <span className={styles.nav__item__text}>Profile</span>
        </Link>
      </nav>
      }
      <FaAlignJustify onClick={handleNav} className={styles['nav__mobile-icon']} />
    </header>
   </>
  );
};

export default Header;
