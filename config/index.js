'use strict'
const path = require('path');

module.exports = {
	dev: {

		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: { // proxy URLs to backend development server
			// '/': 'http://localhost:9080',
		},

		// Various Dev Server settings
		host: 'localhost', // can be overwritten by process.env.HOST
		port: 7081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

		/**
     * Source Maps
     */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',
	},

	build: {
		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
	},
};
