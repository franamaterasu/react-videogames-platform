import React from "react";
import {Link} from "react-router-dom";
import { FaList } from "react-icons/fa";

import styles from "./header.module.scss";

const Header = props => {
  return (
    <>
    <header className={styles.container}>
      <Link to="/" className={styles.logo}>muzk</Link>
      <Link to="/favourites">
        <FaList className={`${styles.header__button}, ${styles['header__button--favourites']}`} />
      </Link>
    </header>
   </>
  );
};

export default Header;
