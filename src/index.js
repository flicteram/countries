import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from './Context'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <ContextProvider>
    <App />
  </ContextProvider>
  </Router>
  ,
  document.getElementById('root')
);



