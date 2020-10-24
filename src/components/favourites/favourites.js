import React from 'react';
import styles from './favourites.module.scss';

const Favourites = props => {
  const {favourites} = props;

  const handleEventCloseFavourite = e => {
    props.handleEventCloseFavouriteClick({
      data: false
    })
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>My favourites</h3>
      <button onClick={handleEventCloseFavourite}>close</button>
      <section className={styles.grid}>
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
    </section>
  )
}

export default Favourites;
