import React from "react";
import styles from "./app.module.scss";

import Header from "../header";
import Bubble from "../bubble";
import List from "../list";

const games = [
  {
    name: "Tomb Raider",
    image:
      "https://media.rawg.io/media/crop/600/400/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
  },
  {
    name: "Grand Theft Auto V",
    image:
      "https://media.rawg.io/media/crop/600/400/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
  },
  {
    name: "The Witcher 3: Wild Hunt",
    image:
      "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  },
  {
    name: "BioShock Infinite",
    image:
      "https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
  },
  {
    name: "Metal Gear Solid V: The Phantom Pain",
    image:
      "https://media.rawg.io/media/crop/600/400/games/490/49016e06ae2103881ff6373248843069.jpg",
  },
  {
    name: "Dark Soul III",
    image:
      "https://media.rawg.io/media/crop/600/400/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
  },
];

function App() {
  return (
    <section className={styles.main}>
      <Header />
      <section className={styles.genders}>
        <Bubble />
      </section>
      <List games={games}/>
    </section>
  );
}

export default App;
