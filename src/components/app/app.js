import React from 'react';
import styles from './app.module.scss';

import Header from '../header/';

function App() {
  return (
    <section className={styles.main}>
      <Header />
    </section>
  );
}

export default App;
