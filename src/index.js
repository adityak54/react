import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import app from './App';
import App from './App';

const vari = ReactDOM.createRoot(document.getElementById('root'));
vari.render(
  <React.StrictMode>
    {/* <app />  This will give error (uppercase me hi hona chahiye)*/}

    <App /> { /* koi bhi component(function) jo return karta hai wo UI
                 display ho jaata hai */}
  </React.StrictMode>
);
