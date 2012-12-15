var socket = io.connect('http://localhost');

socket.on('new user', function(data) {
  // this fires the first time a user connects

  // alert('prompt for camera');
});



// socket.on('news', function (data) {
//   console.log(data);
//   socket.emit('my other event', { my: 'data' });
// });