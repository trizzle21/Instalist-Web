var express = require('express'),
	http = require('http');


var config = require('./config/index.js');

var app = express();
var server = app.listen(config.server.port);
var io = require('socket.io').listen(server);

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var user = require('./api/routes/user');
var groups = require('./api/routes/group');


var url = config.database_url;


app.get('/', function (req, res) {
    res.status(200).json("instalist is live");
})

app.use('/api/users/', user);

oh
io.on('connection', function(socket){
  console.log('a user connected');
});









