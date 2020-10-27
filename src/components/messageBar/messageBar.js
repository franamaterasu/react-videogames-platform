import React from 'react';
import styles from './message-bar.module.scss';

const MessageBar = props => {

  const {message} = props;

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  )
}

export default MessageBar;
