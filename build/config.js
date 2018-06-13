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
		port: 7080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Source Maps

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',
	},

	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),
		
		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',

		// Source Maps

		productionSourceMap: true,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',
		
		bundleAnalyzerReport: false
	},
};
