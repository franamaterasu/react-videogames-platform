import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import styles from "./app.module.scss";

import getDataFromApi from '../../services/getDataFromApi';

import Header from "../header";
// import Bubble from '../bubble';
import List from "../list";
import Detail from "../detail";
import Search from "../search";
import EmptyState from "../emptyState";

function App() {
  const [games, setGames] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [favourites, setFavourites] = useState([]);


  // Conexión API
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

  // Añadir a favoritos
  const handleEvent = favouriteData => {
    setFavourites([...favourites, favouriteData]);
  }

  // Mostrar info detalle
  const renderGameDetail = props => {
    const gameUrl = props.match.params.url;

    const foundGame = games.find(game => {
      return game.url === gameUrl;
    });

    // Mostrar emptyState si no existe el juego
    if(foundGame === undefined) {
      return <EmptyState message="Dont found this game, comeback to home to watch other games" />
    }

    return <Detail game={foundGame} handleEvent={handleEvent} favourites={favourites} />
  }

  return (
    <section className={styles.main}>
      <Header />
      <Switch>
        <Route exact path="/">
          {/*
          <section className={styles.genders}>
            <Bubble />
          </section>
          */}
          <Search handleFilter={handleFilter} />
          <List games={filteredGames} handleEvent={handleEvent}/>
        </Route>
        <Route path="/game/:url" render={renderGameDetail} />
        <Route path="/favourites">
          {favourites.length === 0 ? <EmptyState message="Your favourite games list is empty, add any game to the list." /> : <List games={favourites} handleEvent={handleEvent}/>}
        </Route>
      </Switch>
    </section>
  );
}

export default App;
