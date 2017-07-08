const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ../css/bundle.min.css Is css output path relative by js output path
const extractCSS = new ExtractTextPlugin('../css/bundle.min.css');

module.exports = {
	entry: './stylesheet/src/index.js',
	output: {
		path: resolve(__dirname, 'stylesheet/dist/js'),
		filename: 'bundle.min.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
		}, {
			test: /\.scss$/,
			loader: extractCSS.extract({
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
				}],
			}),
		}, {
			test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=../fonts/[name].[ext]',
		}, {
			test: /\.(png|jpg)$/,
			loader: 'file-loader?name=../images/background/[name].[ext]',
		}],
	},
	resolve: {
		modules: [
			resolve('./stylesheet/src'),
			resolve('node_modules'),
		],
		extensions: ['.js', '.scss'],
	},
	plugins: [
		extractCSS,
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
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
	],
};
