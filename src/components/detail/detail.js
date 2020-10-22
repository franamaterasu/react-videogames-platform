import React from 'react';
import styles from './detail.module.scss';

const Detail = props => {
  const {handleEvent} = props;
  const {url, name, banner, description} = props.game;

  // Función de añadir a la lista de favoritos
  const handleFavouriteClick = e => {
    handleEvent({
      "url": url,
      "name": name,
      "banner": banner
    })
  }

    return (
       <section>
        <section className={styles.banner}
        style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            }}
        />
        <section className={styles.banner__info}>
            <h1 className={styles.banner__title}>{name}</h1>
            <p className={styles.banner__description}>{description}</p>
            <button onClick={handleFavouriteClick} className={`${styles.button} ${styles['button--add']}`}>Add to favourites</button>
        </section>
       </section>
    )
};

export default Detail;
