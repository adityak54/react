import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// here we are creating a react object and storing it in the div present in index.html
// this object is stored in a variable called 'vari'
const vari = ReactDOM.createRoot(document.getElementById('root'));

// in this variable, we are rendering a react component '<App />'
vari.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*  Tree :
     index.html me ek div tha ussi me poora app dikha rahe. 
     is div me ham react jod rahe. uske liye ReactDOM.createRoot kar rahe jisse
     ek root react component ban raha jisme ham baaki ke react components render karenge
     
     REACT ME AISE HI COMPONENT WISE RENDERING HOTI HAI
*/