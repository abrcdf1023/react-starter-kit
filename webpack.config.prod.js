const webpack = require('webpack');
const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// ../css/bundle.min.css Is css output path relative by js output path
const extractCSS = new ExtractTextPlugin('../css/bundle.min.css');

// the path(s) that should be cleaned
const pathsToClean = [
	'js',
	'css',
];

// the clean options to use
const cleanOptions = {
	root: resolve(__dirname, 'dist'),
	verbose: true,
	dry: false,
};

module.exports = {
	entry: {
		main: [
			'babel-polyfill',
			'isomorphic-fetch',
			'./src/js/index.js',
		],
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: resolve(__dirname, 'dist/js'),
		pathinfo: true,
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: [resolve(__dirname, 'src/js'), resolve(__dirname, 'test')],
			use: [{
				loader: 'babel-loader',
			}],
		}, {
			test: /\.scss$/,
			include: resolve(__dirname, 'src/scss'),
			use: extractCSS.extract({
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
		}, {
			test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			include: resolve(__dirname, 'src/assets/fonts'),
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: '../assets/fonts/',
				},
			},
		}, {
			test: /\.(png|jpg|svg|gif)$/,
			include: resolve(__dirname, 'src/assets/images'),
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: '../assets/images/',
				},
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
	plugins: [
		// clean old js and css
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
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
		extractCSS,
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
};
