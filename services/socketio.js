module.exports = function(io) {
  console.log('exports socket');

  io.sockets.on('connection', function (socket) {
    console.log('socket connection');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
};
