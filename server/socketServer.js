/* eslint no-console: "off" */

var _ = require('lodash');
var config = require('./config.json');
var Server = require('socket.io');
var io = new Server().attach(config.socketPort);

var connections = [];

io.on('connection', function(socket) {

    console.log('new socket is connected:', socket.id);
    connections.push(socket);

    socket.on('message', function(data) {
        _.forEach(connections, function(connSocket) {
            connSocket.emit('message', data);
        });
    });
    
    socket.on('disconnect', function() {
        console.log('socket disconnected:', socket.id);
        const index = connections.indexOf(socket);
        connections.splice(index, 1);
    });

});