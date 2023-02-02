//THIS CONFIG FILE USED FOR TEST RUNNER JEST
//const { moduleFileExtensions } = require("./jest.config");

module.exports =  {
	
	presets: [
		['@babel/preset-env', {targets: {node: 'current'}, modules:false}],
		'@babel/preset-typescript'
	  ],
	plugins: [
		[
			'@babel/plugin-proposal-private-property-in-object',
			{ loose: true },
		],
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		['@babel/plugin-proposal-private-methods', { loose: true }],
		['@babel/plugin-transform-runtime'],
		['@babel/plugin-transform-modules-commonjs']
	]
};
