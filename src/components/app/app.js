import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import styles from "./app.module.scss";

import getDataFromApi from '../../services/getDataFromApi';

import Header from "../header";
import Bubble from '../bubble';
import List from "../list";
import Detail from "../detail";
import Favourites from "../favourites";

function App() {
  const [games, setGames] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [favourites, setFavourites] = useState([]);

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

  const handleEvent = favouriteData => {
    setFavourites([...favourites, favouriteData]);
  }

  const renderGameDetail = props => {
    const gameUrl = props.match.params.url;

    const foundGame = games.find(game => {
      return game.url === gameUrl;
    });

    return <Detail game={foundGame} handleEvent={handleEvent}/>
  }

  return (
    <section className={styles.main}>
      <Header handleFilter={handleFilter} />
      <Switch>
        <Route exact path="/">
          <section className={styles.genders}>
            <Bubble />
          </section>
          <List games={filteredGames} handleEvent={handleEvent}/>
        </Route>
        <Route path="/game/:url" render={renderGameDetail} />
      </Switch>
      <Favourites favourites={favourites} />
    </section>
  );
}

export default App;
