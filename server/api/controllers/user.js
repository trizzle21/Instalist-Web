
var https = require('https');


var userModel = require('../models/user');




module.export.register = function(req, res) {

    //Register 

    if (!request.body.email || request.body.password || request.body.username){
        req.status(500).json("error": "required data")
        return;


    }

    user.findOne({'username': request.body.email}).exec(function(err, returnedUser){
        if(err){
            req.status(500).json("error": "something broke!")
            return;

        } else if (returnedUser){
            req.status(500).json("error": "username")
            return;
        }

        //create a new user
        var user = new userModel.user();
        user.username = request.body.username;
        user.email = request.body.email;
        user.setPassword(request.body.password);

        user.save(

        )


    })

}


module.export.login = function(request, response) {

    //Login 

}


