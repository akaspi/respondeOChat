'use strict';

var webpack = require('webpack');
var path = require('path');
var config = require('./config.json');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(path.resolve(path.dirname()), config.publicFolder),
        publicPath: '/' + config.publicFolder + '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'resolve-url', 'sass'] }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};