import ReactDOM from 'react-dom';
import React from 'react';
import './reset.css';
import './common-styles.css';
import styles from './main.css';
import App from './app.js';

ReactDOM.render(
  <div className={styles.container}>
    <h1 className={styles.header}>Centrica demo app</h1>
    <h2 className={styles.subHeader}>
      Task
    </h2>
    <ul>
      <li>
        Using a public api or local json files, get data from 2 or more endpoints and then merge and filter the results.
      </li>
      <li>
        Please provide the full solution.
      </li>
      <li>
        Use vanilla JavaScript or a framework
      </li>
      <li>
        We are particularly interested in seeing use of tES6 methods.
      </li>
    </ul>
    <App/>
  </div>
  , document.getElementById('app'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
