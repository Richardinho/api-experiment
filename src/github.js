import React from 'react';
import styles from './github-styles.css';

export default ({data}) => {
  return (
    <div className={styles.main}>{data.name}</div>
  )
};
