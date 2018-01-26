const webpack = require('webpack');
const { resolve,posix } = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const merge = require('webpack-merge');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
	module: {
		rules:[{
			test: /\.scss$/,
			use: [{
				loader: 'style-loader',
			}, {
				loader: 'css-loader',
				options: {
					sourceMap: true,
				},
			}, {
				loader: 'resolve-url-loader',
			}, {
				loader: 'sass-loader',
				options: {
					sourceMap: true,
				},
			}],
		}]
	},
	devtool: config.dev.devtool,
	entry: {
		main: [
			'babel-polyfill',
			'isomorphic-fetch',
			'react-hot-loader/patch',
			'./src/js/index.js',
		],
	},
	output: {
		publicPath: config.dev.assetsPublicPath,
		filename: '[name].js',
	},
	devServer: {
		clientLogLevel: 'warning',
		contentBase: false,
		host: 'localhost',
		hot: true,
		proxy: config.dev.proxyTable,
		publicPath: config.dev.assetsPublicPath,
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
		},
		port: config.dev.port,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new CopyWebpackPlugin([
      {
        from: resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
	],
});
