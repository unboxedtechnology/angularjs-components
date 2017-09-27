module.exports = [
	{
		test: /\.ts$/,
		enforce: 'pre',
		use: [ 'tslint-loader' ],
		//options: { /* Loader options go here */ }
	}, {
		test: /\.ts(x?)$/,
		use: [ 'ts-loader' ]
	}, {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['env']
			}
		}
	}, {
		test: /\.css$/,
		use: [ 'style-loader', 'css-loader' ]
    }, {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }, {
        test: /\.(htm|html|txt)$/,
        exclude: /node_modules/,
		use: [ 'raw-loader' ]
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		use: [ 'file-loader' ]
    }, {
		test: /\.(png|jpg|jpeg|gif)$/,
		use: [ 'file-loader' ]
	}
];
