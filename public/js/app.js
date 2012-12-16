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
    shot.src = canvas.toDataURL();

    socket.emit("new image", {image: shot.src});

    drawCircle(10,10, shot);
  });

  function drawCircle(x, y, img) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height); //fill the background. color is default black
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, y, 60, 0, 6.28, false); //draw the circle
    ctx.clip(); //call the clip method so the next render is clipped in last path
    ctx.stroke();
    ctx.closePath();
    ctx.drawImage(img, x - 290, y-100);
  }

  socket.on('new image', function(data) {

  });

});