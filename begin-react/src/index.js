import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ttt from './Ttt';
import Search from './Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ttt />
    <Search />
  </React.StrictMode>
);
