var express = require('express'),
	http = require('http');

var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var routes = require('./api/routes/');
var controllers = require('./api/controllers/');

// var models = require('./routes/users');



var url = 'mongodb://localhost:27017/Shopping-List-Backend';


app.set('views', './views');
app.set('view engine', 'pug');
app.use('/static', express.static('views'));


app.get('/', function (req, res) {
	res.render('index')
})



app.route('/api/UserLists')


	.get(function(req,res){

	})
	//Need to call 

app.route('/api/User/:userID')
	//has a get, post and delete
	.get(function(req,res){
		//Gets a certain user
	})
	
	.post(function(req,res){
		//Creates a User
	})


app.route('/api/Group/:groupID')
	//Has a get, post



app.route('/api/Group/:groupID/List/')
	//only has get



app.route('/api/Group/:groupID/List/:listID')
	//has a get, post, delete




io.on('connection', function(socket){
  console.log('a user connected');
});






/*
"User Schema"
{ 
  _id:1,
  firstName: "Tyler",
  lastName: "Ross",
  age: 24,
  groups: [
    "Ross Family",
    "Stir",
    "Mac > Windows"
  ]
}

"Group Schema"
{
	_id:2,
	groupName: "Ross Family",
	size:3,
	id: 14382045,
	list_count: 0
	lists: [
		"Grocery 10/27",
		"Grocery 11/4",
		"Grocery 11/11"
	]
}

List
{
	_id:2,
	listName: "Grocery 10/27",
	creator: 1,
	timeCreated: ,
	listItem: [
		"cheese",
		"bread",
		"vodka"
	]

}



*/