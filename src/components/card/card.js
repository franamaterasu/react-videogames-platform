import React from "react";
import styles from "./card.module.scss";

const Card = () => {
  return (
    <article className={styles.item}>
      <img
        src="https://media.rawg.io/media/crop/600/400/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
        className={styles.image}
        alt="Game"
      />
      <section className={styles.info}>
        <h3 className={styles.name}>Tom Raider</h3>
      </section>
    </article>
  );
};

export default Card;
