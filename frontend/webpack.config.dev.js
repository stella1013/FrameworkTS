const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require('path');
const Dotenv = require('dotenv-webpack'); //for reading env var in project
require('dotenv').config(); //for reading env var in the webpack config


module.exports = ['inline-source-map'].map((devtool) => ({
	mode: 'development',
	devServer: {
		
		host: '0.0.0.0', //<--- for docker
		port: 8081,
		//inline: true,
		hot: true,
		devMiddleware: {
		//public: 'http://0.0.0.0:8081', //<--- for docker
		
		},
		client:{
			webSocketURL:{
				hostname: "0.0.0.0",
				pathname: "/http",
				port: 8081
			}
		},
		static:{
			directory: path.resolve(__dirname, 'src'),
			watch:true
			//publicPath: '/', //<--- docker
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	entry: ['/src/index.ts'],
	devtool,
	resolve: { extensions: ['.ts', '.js'] },
	module: {
		rules: [
			{
				test: /\.m?ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', {"modules": false}], '@babel/preset-typescript'],
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
		
			/* {
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: [/node_modules/, /dist/],
			}, */
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					//MiniCssExtractPlugin.loader,
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
	output: {assetModuleFilename: 'images/[name][ext]'},
    resolve: { extensions: ['.ts', '.js'] },
	plugins: [
		new Dotenv({
			path: './.env.development'}),
			/* new ModuleFederationPlugin({
			name:'user_create',
			filename:'remoteEntry.js',
			remotes:{},
			exposes:{
				'./App': './src/App'
			},
			shared:{} //possibly share Form Fields
		}),  */
			new HtmlWebpackPlugin({
				title: process.env.APP_TITLE,
				scriptLoading: "defer",
				inject: true,
				filename: 'index.html',
				template: path.resolve(__dirname, './src/index.html'),
				hash: false,
				//chunks: ['app']
			}),
		/*
		new MiniCssExtractPlugin({
			filename: 'main.css',
		})*/
		
	],
	
}));
