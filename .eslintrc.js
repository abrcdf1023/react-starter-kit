// https://eslint.org/docs/user-guide/configuring

module.exports = {
	// root true to prevent use another config
	root: true,
	// use babel presets env,react,stage 0
	parserOptions: {
		parser: 'babel-eslint',
	},
	// specify environments
	env: {
		browser: true
	},
	// extend airbnb's config it includes eslint-plugin-react
	extends: ['airbnb'],
	// customer rules
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// use tab indent
		indent: [
			"error",
			"tab", {
				"SwitchCase": 1
			}
		],
		'react/jsx-indent': ["error", "tab"],
		// allow tabs
		'no-tabs': 'off',
		// allow jsx in both .js .jsx
		'react/jsx-filename-extension': ["warn", { "extensions": [".js", ".jsx"] }]
	}
}