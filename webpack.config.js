'use strict';

var webpack = require('webpack');
var path = require('path');
var config = require('./config.json');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:' + config.devPort,
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: path.join(path.resolve(path.dirname()), config.publicFolder),
        publicPath: '/' + config.publicFolder + '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
            { test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'resolve-url', 'sass'] }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};