import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
/* eslint import/no-extraneous-dependencies: "off" */
import { hot } from 'react-hot-loader';

import Header from '../components/Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => (
	<Router>
		<div>
			<Header />

			<hr />

			<Route exact path="/" component={Home} />
			<Route exact path="/page1" component={Page1} />
			<Route exact path="/page2" component={Page2} />
		</div>
	</Router>
);

export default hot(module)(App);
