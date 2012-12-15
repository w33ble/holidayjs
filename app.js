
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  // user = require('./routes/user'),
  http = require('http'),
  path = require('path')
  ;

var app = express();
var wsserver = require('http').createServer(app);


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// index, that's all we need
app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});

// create our server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// websocket server, aka. the magic
wsserver.listen(80);
require('./services/socketio.js')(wsserver);