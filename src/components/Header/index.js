import React from 'react';
import {
	Link,
} from 'react-router-dom';

import './style.scss';

export default () => (
	<ul className="header">
		<li className="header__link"><Link href="/" to="/">Home</Link></li>
		<li className="header__link"><Link href="page1" to="/page1">Page1</Link></li>
		<li className="header__link"><Link href="page2" to="/page2">Page2</Link></li>
	</ul>
);
