const webpack = require('webpack');
const path    = require('path');
const loaders = require("./rules");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, '../');

// the clean options to use
let cleanOptions = {
	root:     ROOT,
	exclude:  [],
	verbose:  true,
	dry:      false
}
  
module.exports = {
	
	context: ROOT,

	entry: {
		app: ROOT + '/src/app/app.js'
	},

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
	},

	resolve: {
		modules: [
			__dirname,
			"node_modules"
		],
        extensions: ['.ts', '.js', '.json']
	},

	plugins: [
		new CleanWebpackPlugin([ 'dist' ], cleanOptions),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // Specify the common bundle's name.
		}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],

	module:{
        rules: loaders
    }

};
