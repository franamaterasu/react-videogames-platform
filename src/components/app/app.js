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
  const [showFavourites, setShowFavourites] = useState(false);


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

  const renderGameDetail = props => {
    const gameUrl = props.match.params.url;

    const foundGame = games.find(game => {
      return game.url === gameUrl;
    });

    return <Detail game={foundGame} handleEvent={handleEvent}/>
  }

  // Mostrar y ocultar la sección de favoritos
  const handleEventShowFavourite = data => {
    setShowFavourites(true);
  }

  const handleEventCloseFavouriteClick = data => {
    setShowFavourites(false);
  }

  return (
    <section className={styles.main}>
      <Header handleFilter={handleFilter} handleEventShowFavourite={handleEventShowFavourite}/>
      <Switch>
        <Route exact path="/">
          <section className={styles.genders}>
            <Bubble />
          </section>
          <List games={filteredGames} handleEvent={handleEvent}/>
        </Route>
        <Route path="/game/:url" render={renderGameDetail} />
      </Switch>
      {
        showFavourites === true ? <Favourites favourites={favourites} handleEventCloseFavouriteClick={handleEventCloseFavouriteClick}/> : ''
      }
    </section>
  );
}

export default App;
