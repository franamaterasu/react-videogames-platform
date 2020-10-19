import React from "react";
import styles from "./card.module.scss";

const Card = props => {
  //const { image, name } = props.card;
  // const { onClick } = props;

 const {image, name} = props;


  return (
    <article
      className={styles.item}
      key={name}
    >
      <img src={image} className={styles.image} alt={name} />
      <section className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
      </section>
    </article>
  );
};

export default Card;
