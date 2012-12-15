console.log('socket.js found');

module.exports = function(server) {
  io = require('socket.io').listen(server);
};
