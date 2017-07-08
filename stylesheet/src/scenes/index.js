import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

export default () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/page1">Page1</Link></li>
				<li><Link to="/page2">Page2</Link></li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route exact path="/page1" component={Page1} />
			<Route exact path="/page2" component={Page2} />
		</div>
	</Router>
);
