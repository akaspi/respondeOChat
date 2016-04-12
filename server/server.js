/* eslint no-undef: "off", no-console: "off" */

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

var static_path = path.join(path.resolve(path.dirname()), 'client/public');
app.use(express.static(static_path));

io.on('connection', function (socket) {
    socket.on('message', function (data) {
        io.sockets.emit('message', data);
    });
});

// var path = require('path');
// // var webpack = require('webpack');
// // var config = require('./config.json');
//
//
// // var isDevelopment = (process.env.NODE_ENV !== 'production');

//
// var prodServer = app.use(express.static(static_path))
//     .get('/', function (req, res) {
//         res.sendFile('index.html', {
//             root: static_path
//         });
//     }).listen(process.env.PORT || config.prodPort, function (err) {
//         if (err) { console.log(err); }
//         console.log('Production is listening at localhost:' + prodServer.address().port);
//     });
//
// require('./socketServer')(prodServer);

// if (isDevelopment) {
//     var webpackDevConf = require('./../webpack.config.js');
//     var WebpackDevServer = require('webpack-dev-server');
//
//     new WebpackDevServer(webpack(webpackDevConf), {
//         publicPath: webpackDevConf.output.publicPath,
//         hot: true,
//         stats: { colors: true }
//     }).listen(config.devPort, 'localhost', function (err) {
//         if (err) { console.log(err); }
//         console.log('Development is listening at localhost:' + config.devPort);
//     });
// }