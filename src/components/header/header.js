import React from "react";
import {Link} from "react-router-dom";
import styles from "./header.module.scss";

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
      <Link to="/" className={styles.logo}>muzk</Link>
      <input
        className={styles.search}
        type="text"
        placeholder="Search news..."
        onChange={handleChange}
      />
    </header>
   </>
  );
};

export default Header;
