const merge  = require('webpack-merge');
const common = require('./webpack.common.js');
// plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin()
	]
});
