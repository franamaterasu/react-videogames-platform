import React from "react";
import {Link} from "react-router-dom";
import { FaHouseDamage, FaBurn, FaList } from "react-icons/fa";

import styles from "./header.module.scss";

const Header = props => {
  return (
    <>
    <header className={styles.container}>
      <Link to="/" className={styles.logo}>muzk</Link>
      <nav className={styles.nav}>
         <Link to="/" className={styles.nav__item}>
          <FaHouseDamage className={styles.nav__item__icon} />
          <span className={styles.nav__item__text}>Home</span>
        </Link>
        <Link to="/favourites" className={styles.nav__item}>
          <FaBurn className={styles.nav__item__icon} />
          <span className={styles.nav__item__text}>Favourites</span>
        </Link>
         <Link to="/list" className={styles.nav__item}>
          <FaList className={styles.nav__item__icon} />
          <span className={styles.nav__item__text}>List</span>
        </Link>
      </nav>
    </header>
   </>
  );
};

export default Header;
