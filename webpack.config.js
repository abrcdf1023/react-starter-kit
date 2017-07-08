const webpack = require('webpack');
const {
	resolve
} = require('path');

module.exports = {
	devtool: 'eval',
	entry: {
		main: [
			'babel-polyfill',
			'react-hot-loader/patch',
			'./stylesheet/src/index.js',
		],
	},
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'stylesheet/dist/js'),
		publicPath: 'http://localhost:7080/',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
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
			loader: 'file-loader?name=app/fonts/[name].[ext]',
		}, {
			test: /\.(png|jpg)$/,
			loader: 'file-loader?name=app/images/background/[name].[ext]',
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	devServer: {
		contentBase: './stylesheet/dist',
		publicPath: 'http://localhost:7080/',
		historyApiFallback: true,
		port: 7080,
		hot: true,
		noInfo: true,
	},
};
