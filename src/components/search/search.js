import React from 'react';
import styles from './search.module.scss';

const Search = props => {

  const handleChange = e => {
    props.handleFilter({
      value: e.target.value,
      key: 'name'
    });
  }

  return (
    <section className={styles.container}>
       <input
        className={styles.input}
        type="text"
        placeholder="Search games..."
        onChange={handleChange}
      />
    </section>
  )
}

export default Search;
