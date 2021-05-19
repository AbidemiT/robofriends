import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoboApp from "./containers/RoboApp";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import reportWebVitals from './reportWebVitals';
import "tachyons";

import {searchRobots, requestRobots} from "./reducers";

const rootReducer = combineReducers({searchRobots, requestRobots})

// Redux Logger
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoboApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);