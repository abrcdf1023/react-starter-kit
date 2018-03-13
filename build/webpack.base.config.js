'use strict'
const { resolve } = require('path')
const autoprefixer = require('autoprefixer')

const utils = require('./utils')

const config = require('../config')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	context: resolve(__dirname, '../'),
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: isDev ? config.dev.assetsPublicPath	: config.build.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [{
			test: /(\.js$|\.jsx$)/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.scss$/,
			use: [{
				loader: 'style-loader',
			}, {
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
					modules: true,
					sourceMap: true,
				},
			},{
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
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: utils.assetsPath('images/[name].[hash:7].[ext]'),
				limit: 10000,
			},
		}, {
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.assetsPath('media/[name].[hash:7].[ext]'),
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
				limit: 10000,
			},
		}],
	},
	node: {
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}
