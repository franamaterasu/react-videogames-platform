import React from "react";
import styles from "./app.module.scss";

import Header from "../header";
import Bubble from "../bubble";
import Card from "../card";

function App() {
  return (
    <section className={styles.main}>
      <Header />
      <section className={styles.genders}>
        <Bubble />
      </section>
      <section className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}

export default App;
