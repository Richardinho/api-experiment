import ReactDOM from 'react-dom';
import React from 'react';
import './styles/reset.css';
import './styles/common.css';
import App from './app.component';

ReactDOM.render(
  <App/>
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
