/* eslint no-undef: "off", no-console: "off" */

var config = require('./config.json');
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var chatServer = require('./chatServer');

server.listen(process.env.PORT || config.prodPort, function () {
    console.log('Server listening at port %d', server.address().port);
});

var static_path = path.join(path.resolve(path.dirname()), config.publicFolder);
app.use(express.static(static_path));

chatServer.start(server);

var isDevelopment = (process.env.NODE_ENV !== 'production');
if (isDevelopment) {
    var webpackDevConf = require('./../webpack.config.js');
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');

    var devServer = new WebpackDevServer(webpack(webpackDevConf), {
        publicPath: webpackDevConf.output.publicPath,
        hot: true,
        stats: { colors: true }
    });

    chatServer.start(devServer.listeningApp);

    devServer.listen(config.devPort, function (err) {
        if (err) { console.log(err); }
        console.log('Development is listening at localhost:' + config.devPort);
    });

}