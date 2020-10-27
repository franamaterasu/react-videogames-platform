import React from 'react';
import {GiSevenPointedStar} from "react-icons/gi";
import MessageBar from '../messageBar';
import styles from './detail.module.scss';

const Detail = props => {
  const {handleEvent, favourites} = props;
  const {url, name, banner, image, description, metascore, platforms, genres} = props.game;

  

  // Función de añadir a la lista de favoritos
  const handleFavouriteClick = e => {
    handleEvent({
      "url": url,
      "name": name,
      "banner": banner,
      "image": image,
      "metascore": metascore
    })
  }
  
  return (
    <>
      <section className={styles.banner}
      style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
          }}
      >
        <section className={styles.banner__info}>
            <h1 className={styles.banner__title}>{name}</h1>
            <p className={styles.banner__description}>{description}</p>
            <section className={styles.banner__data}>
              <button onClick={handleFavouriteClick} className={`${styles.button} ${styles['button--add']}`}>
                Add to favourites
              </button>
              <div className={styles.banner__metascore}>
                <GiSevenPointedStar className={styles.banner__icon} />
                <span className={styles['banner__metascore-number']}>{metascore}</span>
              </div>
              <div className={styles.banner__genres}>
                <span><strong>Genres:</strong> </span>
                {
                  genres.map((genre) => (
                    <span className={styles.banner__genre}>{genre}</span>
                  ))
                }
              </div>
            </section>
            <div className={styles.banner__platforms}>
              {
                platforms.map((platform) => (
                  <li className={styles.banner__platform}>
                    <img className={styles['banner__platform-image']} src={platform} alt="Platform"/>
                  </li>
                ))
              } 
            </div>
        </section>
      </section>
    </>
  )
};

export default Detail;
