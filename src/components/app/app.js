import React, {useEffect, useState} from "react";
import styles from "./app.module.scss";

import getDataFromApi from '../../services/getDataFromApi';

import Header from "../header";
import List from "../list";

function App() {
  const [games, setGames] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    getDataFromApi().then(data => setGames(data));
  }, []);

  // Filtrado por nombre

  const handleFilter = data => {
    if(data.key === 'name') {
      setNameFilter(data.value);
    }
  }

  const filteredGames = games.filter(game => {
    let filterName = game.name.toLowerCase().includes(nameFilter.toLowerCase());
    return filterName;
  });

  return (
    <section className={styles.main}>
      <Header handleFilter={handleFilter} />
      <List games={filteredGames}/>
    </section>
  );
}

export default App;
