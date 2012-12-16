module.exports = function(io) {

  io.configure(function() {
      var s = 4; //poll ever s seconds
      io.set('transports', ["xhr-polling"]);
      io.set('polling duration', s); //check every s seconds
  });

  io.sockets.on('connection', function (socket) {

    // socket.emit('news', { hello: 'world' });

    // socket.on('my other event', function (data) {
    //   console.log(data);
    // });

    socket.emit('new user');

    socket.on('new image', function(data) {
      socket.broadcast('image swap', data);
    });

  });
};
