var socket = io.connect('http://localhost');

socket.on('new user', function(data) {
  // this fires the first time a user connects

});

$(document).ready(function() {

  var canvas = $("#canvas1")[0];
  var ctx = canvas.getContext("2d");
  var video = $('video')[0];

  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

  navigator.getMedia(

     // constraints
     {
        video: true
     },

     // successCallback
     function(localMediaStream) {

        video.src = window.URL.createObjectURL(localMediaStream);
        video.onloadedmetadata = function(e) {

        };
     },

     // errorCallback
     function(err) {
      console.log("The following error occured: " + err);
     }

  );

  $('#capture').click(function(e) {
    var shot = new Image();
    ctx.drawImage(video, 0, 0);
  });

});