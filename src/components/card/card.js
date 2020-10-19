import React from "react";
import styles from "./card.module.scss";

const Card = props => {
  
  const {image, name, index} = props.game;

  return (
    <article
      className={styles.item}
      key={index}
    >
      <img src={image} className={styles.image} alt={name} />
      <section className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
      </section>
    </article>
  )

};

export default Card;
