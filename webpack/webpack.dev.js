const webpack = require('webpack');
const path    = require('path');
const loaders = require("./rules");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: ['./src/index.ts'],

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
	},

    resolve: {
		modules: [
			__dirname,
			"node_modules"
		],
        extensions: ['.ts', '.js', '.json']
	},

    devtool: "cheap-eval-source-map",

	plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
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
