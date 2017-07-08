import React from 'react';
import {
	Link,
} from 'react-router-dom';

import './style';

export default () => (
	<ul className="header">
		<li className="header__link"><Link to="/">Home</Link></li>
		<li className="header__link"><Link to="/page1">Page1</Link></li>
		<li className="header__link"><Link to="/page2">Page2</Link></li>
	</ul>
);
