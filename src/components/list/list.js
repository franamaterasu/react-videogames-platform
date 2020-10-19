import React from 'react';

import styles from './list.module.scss';

import Card from '../card';

const List = props => {
    const {games} = props;

    return(
        <section className={styles.content}>
            {games.map((game, index) => (
                <Card game={game} />
            ))}
        </section>
    )
}

export default List;