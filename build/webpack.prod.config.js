'use strict'
const webpack = require('webpack');
const { resolve, join } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		app: [
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
		// generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
			filename: config.build.index,
			template: 'templates/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
		}),
		// keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
		// build optimization plugins
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            join(__dirname, '../node_modules')
          ) === 0
        )
      }
		}),
		// extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		// This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
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
