import React, { Component } from 'react';
import styles from './books.css';
import Github from './github';

const renderBook = (book, index) => {
  return (
    <li key={index}>
      <h2>{ book.title}</h2>
      <div>
        <Github data={book.github}/>
      </div>
    </li> 
  )
};

export default({ books }) =>( 
  <div className={styles.bookContainer}>
    <h2 className={styles.header}>books</h2>
    <ul>
      {books.map(renderBook)}
    </ul>
  </div>
);
