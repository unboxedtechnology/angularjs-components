const merge  = require('webpack-merge');
const common = require('./webpack.common.js');
// plugins
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	plugins: [
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
	]
});
