import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { HashBrowser } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashBrowser>
    <App />
    </HashBrowser>
  </React.StrictMode>
);

