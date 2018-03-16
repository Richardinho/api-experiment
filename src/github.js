import React from 'react';
import styles from './styles/github.css';

const renderRepo = (repo, index) => (
  <li className={styles.repo} key={index}>
    <div><span className={styles.label}>name:</span> {repo.name}</div>
    <div><span className={styles.label}>description:</span> { repo.description}</div>
  </li>
);
export default ({data}) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.header}>Github Repositories referencing this book</h2>
      <ul>
        {data.map(renderRepo)}
      </ul>
    </div>
  )
};
