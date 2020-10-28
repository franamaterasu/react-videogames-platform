import React from 'react';
import {Link} from "react-router-dom";
import { GiConfrontation} from "react-icons/gi";

import styles from './empty-state.module.scss';

const EmptyState = props => {

  const {message} = props;

  return(
    <section className={styles.container}>
      <div className={styles.info}>
        <GiConfrontation className={styles.icon} />
        <p className={styles.message}>{message}</p>
        <Link to="/" className={styles.button}>Back!</Link>
      </div>
    </section>
  )
}

export default EmptyState;
