var express = require('express'),
	http = require('http');

var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);


app.get('/', function (req, res) {
	res.render('index')
})