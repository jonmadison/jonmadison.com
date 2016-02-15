import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
//import Gallery from '../components/Gallery';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
        </Route>
  </Router>
);
