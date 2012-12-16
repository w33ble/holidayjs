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

    shot.onload=function() {
       drawCircle(shot);
     };
  });

  function drawTarget() {
    var stage = new Kinetic.Stage({
      container: 'target',
      width: 640,
      height: 480
    });
    var layer = new Kinetic.Layer();

    var circle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        stroke: 'black',
        strokeWidth: 4
      });

      // add the shape to the layer
      layer.add(circle);

      // add the layer to the stage
      stage.add(layer);
  }

  drawTarget();

  var stage = new Kinetic.Stage({
      container: 'container',
      width: 640,
      height: 480
    });
    var layer = new Kinetic.Layer();

  function drawCircle(img) {

    var circle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: {
          image: img,
          offset: [320, 240]
        },
        stroke: 'black',
        strokeWidth: 4
      });

      // add the shape to the layer
      layer.add(circle);

      // add the layer to the stage
      stage.add(layer);
  }

  socket.on('new image', function(data) {

  });

});