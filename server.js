var express = require('express'),
	http = require('http');

var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);


app.set('views', './views')
app.set('view engine', 'pug')
app.use('/static', express.static('static'))


app.get('/', function (req, res) {
	res.render('index')
})


/*
"User Schema"
{ 
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
	listName: "Grocery 10/27",
	listItem: [
		"cheese",
		"bread",
		"vodka"
	]

}



*/