import React, { Component } from 'react';
import styles from './styles/books.css';
import Github from './github';

const renderBook = (item, index) => {
  const book = item.book;
  return (
    <li className={styles.book} key={index}>
      <h2 className={styles.title}>{ book.title}</h2>
      <ul className={styles.bookDetails}>
        <li>author: { book.author }</li>
        <li>publisher: { book.publisher }</li>
      </ul>
      <div>
        <Github data={item.github}/>
      </div>
    </li> 
  )
};

export default({ items }) =>( 
  <div className={styles.bookContainer}>
    <h2 className={styles.header}>books</h2>
    <ul>
      {items.map(renderBook)}
    </ul>
  </div>
);
