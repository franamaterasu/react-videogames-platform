import React from 'react';
import styles from './app.module.scss';

import Header from '../header/';
import Bubble from '../bubble/';

function App() {
  return (
    <section className={styles.main}>
      <Header />
      <section className={styles.genders}>
        <Bubble />
      </section>
    </section>
  );
}

export default App;
