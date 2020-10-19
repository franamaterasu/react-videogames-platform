import React from "react";
import styles from "./header.module.scss";

import Bubble from '../bubble';

const Header = () => {
  return (
    <>
    <header className={styles.container}>
      <span className={styles.logo}>muzk</span>
      <input
        className={styles.search}
        type="text"
        placeholder="Search news..."
      />
    </header>
    <section className={styles.genders}>
      <Bubble />
    </section>
   </>
  );
};

export default Header;
