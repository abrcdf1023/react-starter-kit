'use strict'
const { resolve } = require('path');

const config = require('../config');

module.exports = {
	output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: 'static/images/[name].[hash:7].[ext]',
				limit: 10000,
			},
		}, {
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: 'static/media/[name].[hash:7].[ext]',
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: 'static/fonts/[name].[hash:7].[ext]',
				limit: 10000,
			},
		}],
	},
	resolve: {
		modules: [
			resolve('src'),
			resolve('node_modules'),
		],
		extensions: ['.js', '.scss'],
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
