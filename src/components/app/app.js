import React, {useEffect, useState} from "react";
import styles from "./app.module.scss";

import getDataFromApi from '../../services/getDataFromApi';

import Header from "../header";
import List from "../list";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getDataFromApi().then(data => setGames(data));
  }, []);

  console.log(games);

  return (
    <section className={styles.main}>
      <Header />
      {/*<List games={games}/>*/}
    </section>
  );
}

export default App;
