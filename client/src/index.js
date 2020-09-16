import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MegaVent from './megaVent';
import './Styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MegaVent />
      <Switch>
        <Route />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

