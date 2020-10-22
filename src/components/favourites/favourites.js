import React from 'react';
import styles from './favourites.module.scss';

const Favourites = props => {

  const {favourites} = props;


  return (
    <section className={styles.container}>
      {
        favourites.map((favourite, index) => (
          <div className={styles.item} key={index}>
            <img className={styles.image} src={favourite.banner} alt={favourite.name} />
            <section className={styles.info}>
              <h3 className={styles.name}>{favourite.name}</h3>
            </section>
          </div>
        ))
      }
    </section>
  )
}

export default Favourites;
