import React from "react";
import styles from "./header.module.scss";

import Bubble from '../bubble';

const Header = props => {

  const handleChange = e => {
    props.handleFilter({
      value: e.target.value,
      key: 'name'
    });
  }

  return (
    <>
    <header className={styles.container}>
      <span className={styles.logo}>muzk</span>
      <input
        className={styles.search}
        type="text"
        placeholder="Search news..."
        onChange={handleChange}
      />
    </header>
    <section className={styles.genders}>
      <Bubble />
    </section>
   </>
  );
};

export default Header;
