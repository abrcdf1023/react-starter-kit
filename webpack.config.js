const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
	devtool: 'source-map',
	entry: {
		main: [
			'babel-polyfill',
			'isomorphic-fetch',
			'react-hot-loader/patch',
			'./src/js/index.js',
		],
	},
	output: {
		publicPath: 'http://localhost:7080/',
		filename: '[name].js',
		pathinfo: true,
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: [resolve(__dirname, 'src/js'), resolve(__dirname, 'test')],
			use: {
				loader: 'babel-loader',
			},
		}, {
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
		}, {
			test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			include: resolve(__dirname, 'dist/assets/fonts'),
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/fonts/',
				},
			},
		}, {
			test: /\.(png|jpg|svg|gif)$/,
			include: resolve(__dirname, 'dist/assets/images'),
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/images/',
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	devServer: {
		proxy: { // proxy URLs to backend development server
			'/': 'http://localhost:9080',
		},
		contentBase: './dist',
		publicPath: 'http://localhost:7081/',
		historyApiFallback: true,
		port: 7081,
		hot: true,
		noInfo: true,
	},
};
