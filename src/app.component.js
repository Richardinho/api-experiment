import React, { Component } from 'react';
import styles from './styles/app.css';
import Books from './books-container.component';

export default () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Centrica demo app</h1>
    <h2 className={styles.subHeader}>Task:</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Using a public api or local json files, get data from 2 or more endpoints and then merge and filter the results.
      </li>
      <li className={styles.listItem}>
        Please provide the full solution.
      </li>
      <li className={styles.listItem}>
        Use vanilla JavaScript or a framework
      </li>
      <li className={styles.listItem}>
        We are particularly interested in seeing use of ES6 methods.
      </li>
    </ul>
    <Books/>
  </div>
)



