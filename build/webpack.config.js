const webpack = require('webpack');
const { resolve } = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
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
				{ from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
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
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
	],
};
