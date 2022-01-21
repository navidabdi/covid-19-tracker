import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { StateCovidTracker } from './contexts/StateCovidTracker';
ReactDOM.render(
  <StateCovidTracker>
    <App />
  </StateCovidTracker>,
  document.getElementById('root')
);
