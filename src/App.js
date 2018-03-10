import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
/* eslint import/no-extraneous-dependencies: "off" */
import { hot } from 'react-hot-loader';

import Header from './components/Header';
import Home from './loadable/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default hot(module)(() => (
  <Router>
    <div>
      <Header />

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </div>
  </Router>
));
