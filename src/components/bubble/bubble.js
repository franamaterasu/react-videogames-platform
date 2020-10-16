import React from "react";
import {
  GiAmericanFootballHelmet,
  GiBrutalHelm,
  GiPuzzle,
  GiPistolGun,
  GiCarWheel,
  GiDrawbridge,
} from "react-icons/gi";
import styles from "./bubble.module.scss";

const Bubble = () => {
  return (
    <>
      <article className={styles.item}>
        <GiAmericanFootballHelmet className={styles.icon} />
        <p className={styles.name}>Sports</p>
      </article>
      <article className={styles.item}>
        <GiBrutalHelm className={styles.icon} />
        <p className={styles.name}>Adventure</p>
      </article>
      <article className={styles.item}>
        <GiPuzzle className={styles.icon} />
        <p className={styles.name}>Puzzle</p>
      </article>
      <article className={styles.item}>
        <GiPistolGun className={styles.icon} />
        <p className={styles.name}>Shooter</p>
      </article>
      <article className={styles.item}>
        <GiDrawbridge className={styles.icon} />
        <p className={styles.name}>Strategy</p>
      </article>
      <article className={styles.item}>
        <GiCarWheel className={styles.icon} />
        <p className={styles.name}>Racing</p>
      </article>
    </>
  );
};

export default Bubble;
