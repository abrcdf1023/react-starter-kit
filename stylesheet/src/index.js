import React from 'react';
import ReactDOM from 'react-dom';
import {
	AppContainer,
} from 'react-hot-loader';

import App from 'scenes';

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('scenes', () => {
		/* eslint-disable global-require */
		const NextApp = require('scenes').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('root'),
		);
	});
}
