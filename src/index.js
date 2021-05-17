import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoboApp from "./containers/RoboApp";
import reportWebVitals from './reportWebVitals';
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <RoboApp greeting={`Welcome to my Robo friends Application, learning React is beutiful.`}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
