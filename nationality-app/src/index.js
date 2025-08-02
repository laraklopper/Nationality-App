import React from 'react';// Import the React module to use React functionalities
import ReactDOM from 'react-dom/client';// Import the ReactDOM library, to provide a method rendering React components into the DOM
import './index.css';//Import the CSS stylesheet 
import App from './App';//import the app function in App.js file
import reportWebVitals from './reportWebVitals';//Import reportWebVitals function from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css';//Import React Bootstrap

// Create a root for rendering the React app using the element id
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root using ReactDOM
root.render(
  <React.StrictMode>{/* Enable additional checks and warnings during development */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
