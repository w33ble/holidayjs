module.exports = function(io) {

  io.sockets.on('connection', function (socket) {

    // socket.emit('news', { hello: 'world' });

    // socket.on('my other event', function (data) {
    //   console.log(data);
    // });

    socket.emit('new user');

    socket.on('new image', function(data) { console.log("new image", data); });

  });
};
