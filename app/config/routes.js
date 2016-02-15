import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Learning from '../components/Learning';
import Doing from '../components/Doing';
import Showing from '../components/Showing';
//import Gallery from '../components/Gallery';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/learning" component={Learning} />
            <Route path="/doing" component={Doing} />
            <Route path="/showing" component={Showing} />
        </Route>
  </Router>
);
