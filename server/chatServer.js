function start(server) {
    var io = require('socket.io').listen(server);

    io.on('connection', function (socket) {
        socket.on('message', function (msgData) {
            io.sockets.emit('message', msgData);
        });
    });
}

module.exports = {
    start: start
};