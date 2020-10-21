import React from "react";
import {Link} from "react-router-dom";
import styles from "./card.module.scss";

const Card = props => {
  
  const {url, image, name, index} = props.game;

  return (
    <article
      className={styles.item}
      key={index}
    >
      <Link to={`/game/${url}`}>
        <img src={image} className={styles.image} alt={name} />
        <section className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
        </section>
      </Link>
    </article>
  )

};

export default Card;
