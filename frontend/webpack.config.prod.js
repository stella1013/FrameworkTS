const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require('path');
const Dotenv = require('dotenv-webpack'); //for reading env var in project
require('dotenv').config(); //for reading env var in the webpack config
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports =['hidden-source-map'].map((devtool) => ({
	mode: 'production',
	entry: ['/src/index.ts'],
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: { extensions: ['.ts', '.js'] },
    devtool,
	module: {
		rules: [
			{
				test: /\.m?ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript'],
						plugins: [
							[
								'@babel/plugin-proposal-private-property-in-object',
								{ loose: true },
							],
							['@babel/plugin-proposal-decorators', { legacy: true }],
							['@babel/plugin-proposal-class-properties', { loose: true }],
							['@babel/plugin-proposal-private-methods', { loose: true }],
							['@babel/plugin-transform-runtime'],
							['@babel/plugin-transform-modules-commonjs'],
						],
					},
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
							sourceMap: false,
							sassOptions: {
								outputStyle: 'compressed',
							},
						},
					},
				],
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				type: 'asset/resource'
				
			},
		],
    },
    resolve: { extensions: ['.ts', '.js'] },
	plugins: [
		new Dotenv({
			path: './.env'}),
	/* 	new ModuleFederationPlugin({
			name:'user_create',
			filename:'remoteEntry.js',
			remotes:{},
			exposes:{
				'./CreateUserFormModule': './src/CreateUserFormModule'
			},
			shared:{}
		}), */
		new HtmlWebpackPlugin({
			title: process.env.APP_TITLE,
			scriptLoading: "defer",
			inject: true,
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),
			hash: false,
			//chunks: ['app']
			
		}),
		new HtmlWebpackPartialsPlugin({
			path: './src/headtag/analytics.html',
			location: 'head',
			priority: 'high',
			options: {
				ga_property_id: 'UA-50093674-1',
				gaTag_property_id: 'GTM-NC3P2WC'
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		})
		
	],

}));
