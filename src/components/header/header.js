import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return(
        <header className={styles.container}>
            <span className={styles.logo}>ReactBlog</span>
            <input className={styles.search} type="text" placeholder="Search news..." />
        </header>
    )
};

export default Header;