import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import Header from 'components/Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

export default () => (
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
