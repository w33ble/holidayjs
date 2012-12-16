module.exports = function(io) {

  io.configure(function() {
      var s = 4; //poll ever s seconds
      io.set('transports', ["xhr-polling"]);
      io.set('polling duration', s); //check every s seconds
  });

  io.sockets.on('connection', function (socket) {

    socket.on('new image', function(data) {
      socket.broadcast.emit('new image', data);
    });

  });
};
