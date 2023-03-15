import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import App from './app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

