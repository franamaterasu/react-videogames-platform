import React from 'react';

import styles from './list.module.scss';

import Card from '../card';

const List = props => {

    const {games} = props;
    return(
        <section className={styles.content}>
            {games.map((game) => (
                <Card name={game.name} image={game.image}/>
            ))}
        </section>
    )
}

export default List;