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

  // Filtrado por nombre
  const onHandleChange = e => {
    let filterText = e.target.value;
    let filteredGames = games.filter(game => game.name.toLowerCase().includes(filterText.toLowerCase()));

    setGames(filteredGames);
  }

  return (
    <section className={styles.main}>
      <Header handleChange={onHandleChange}/>
      <List games={games}/>
    </section>
  );
}

export default App;
