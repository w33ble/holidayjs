var socket = io.connect('http://localhost');
console.log('i has a socket');

socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});