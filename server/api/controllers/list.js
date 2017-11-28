var listModel = require('../models/list.js'),
    config = require('../config/index.js');

module.exports = {
    getList : function(req, res){
       //do something
    
    var token = req.headers['authorization'];
    if (!token) return next(); 

    if(!)

    jwt.verify(token, config.JWT_SECRET, function(err, user) {
        if (err) {
          return res.status(401).json({
            message: 'Please register Log in using a valid email to submit posts'
          });
        } else {
            listModel. 
        }
     

    },
    addToList : function(req, res){
       //do something
    }
}
