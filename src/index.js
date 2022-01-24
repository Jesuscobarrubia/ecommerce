import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './estilos/estilos.css';
import { getFireStoreApp } from './firebase/config';

getFireStoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


