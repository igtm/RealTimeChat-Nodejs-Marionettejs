'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');

var socketIO = require('socket.io');


// init express
var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../dist/scripts/views');
});

// set logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// mount static
app.use(express.static( path.join( __dirname, '../dist') ));
app.use(express.static( path.join( __dirname, '../.tmp') ));


// route index.html
app.get('/', function(req, res){
  res.sendfile( path.join( __dirname, '../dist/index.html' ) );
});

// start server
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express App started!');
});

var io = socketIO.listen(server);
io.configure(function () {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
});
var users = 0;

io.sockets.on("connection", function(socket){
    users++;
    io.sockets.emit("count",{ count: users});

    socket.on("talk:toServer", function(data){ // 投稿送信
        socket.broadcast.emit("talk:toClient",{talk:data.talk});
    });


   socket.on("disconnect", function(){ // 切断時
       users--;
       socket.broadcast.emit("count",{ count: users});
   });
});



