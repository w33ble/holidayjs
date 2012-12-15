$(document).ready(function() {

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
        var video = $('video')[0];
        video.src = window.URL.createObjectURL(localMediaStream);
        video.onloadedmetadata = function(e) {
           var canvas = $("#canvas1")[0];
           var ctx = canvas.getContext("2d");

        };
     },

     // errorCallback
     function(err) {
      console.log("The following error occured: " + err);
     }

  );

});