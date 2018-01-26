const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const merge = require('webpack-merge');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
	module: {
		rules: [{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true,
					},
				}, {
					loader: 'resolve-url-loader',
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					},
				}, {
					loader: 'postcss-loader',
					options: {
						parser: 'postcss-scss',
						plugins: [
							autoprefixer,
						],
					},
				}],
			}),
		}]
	},
	entry: {
		main: [
			'babel-polyfill',
			'isomorphic-fetch',
			'./src/js/index.js',
		],
	},
	output: {
		path: config.build.assetsRoot,
		filename: 'js/[name].[chunkhash].js',
	},
	plugins: [
		// define global values
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		// build optimization plugins
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.[chunkhash].js',
			minChunks: 2,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
		}),
		new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      allChunks: true,
		}),
		// copy custom static assets
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			// Compression specific options
			compress: {
				// remove warnings
				warnings: false,
				// Drop console statements
				drop_console: true,
			},
		}),
		// webpack enhancement plugins
		new BundleAnalyzerPlugin(),
	],
});
