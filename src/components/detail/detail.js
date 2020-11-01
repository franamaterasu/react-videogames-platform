import React, {useState} from 'react';
import {GiSevenPointedStar} from "react-icons/gi";
import { FaPlay, FaPlus } from "react-icons/fa";
import MessageBar from '../messageBar';
import styles from './detail.module.scss';

const Detail = props => {
  const {handleEvent, repeatGame} = props;
  const {url, name, banner, iframe,  image, description, metascore, platforms, genres} = props.game;

  const [video, setVideo] = useState(false);


  // Componente video modal
  const Video = props => {
    return (
      <section className={styles['video__main']}>
        <FaPlus className={styles['video__close']} onClick={handleHideVideo} />
        <div className={styles['video__content']}>
          <iframe className={styles['video__iframe']} title={name} width="560" height="315" src={iframe} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    )
  }

  // Funciónes que muestra y oculta el video modal

  const handleShowVideo = () => {
    setVideo(true);
  }

  const handleHideVideo = () => {
    setVideo(false);
  }
  

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
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
          }}
      >
        <FaPlay className={styles.play} onClick={handleShowVideo}/>
      </section>
      <section className={styles.banner__info}>
          <h1 className={styles.banner__title}>{name}</h1>
          <p className={styles.banner__description}>{description}</p>
          <section className={styles.banner__data}>
              <button onClick={handleFavouriteClick} className={`${styles.button} ${styles['button--add']}`}>Add to favourites</button>
            <button onClick={handleShowVideo} className={`${styles.button} ${styles['button--video']}`}>
              Show trailer
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
      {video && <Video />}
    </>
  )
};

export default Detail;
