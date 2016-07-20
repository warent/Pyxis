import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/Home';
import WelcomePage from './containers/Welcome';

export default (
  <Route path="/">
    <IndexRoute component={WelcomePage} />
    <Route path="/home" component={HomePage} />
  </Route>
);
