const { resolve } = require('path');

module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}],
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			use: {
				loader: 'url-loader',
				options: {
					name: 'assets/fonts/[name].[ext]',
				},
			},
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			use: {
				loader: 'url-loader',
				options: {
					name: 'assets/images/[name].[ext]',
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
}
