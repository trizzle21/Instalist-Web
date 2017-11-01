// Routing API for groups
//
//
//
//


var express = require('express')
var router = express.Router()
var request = require("request");

var group = require("../controllers/group");


router.get('/get/:groupID', function (req, res) {
  group.getGroup(req, res)
})

router.post('/create', function (req, res) {
  
})


