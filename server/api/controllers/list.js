


var listModel = require('../models/list.js');

module.exports = {
    getList : function(req, res){
       //do something
    
    var token = req.headers['authorization'];
    if (!token) return next(); 

    jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
        if (err) {
          return res.status(401).json({
            message: 'Please register Log in using a valid email to submit posts'
          });
        } else {
            listSc
        }
     

    },
    addToList : function(req, res){
       //do something
    }
}
