
var https = require('https');

var jwt = require('jsonwebtoken');



var userModel = require('../models/user');




module.export.register = function(req, res) {

    //Register 

    if (!request.body.email || request.body.password || request.body.username){
        req.status(500).json("error": "required data")
        return;


    }

    userModel.findOne({'username': request.body.email}).exec(function(err, returnedUser){
        if(err){
            req.status(500).json("error": "something broke!")
            return;

        } else if (returnedUser){
            req.status(500).json("error": "username already exists")
            return;
        }

        //create a new user
        var user = new userModel.user();
        user.username = request.body.username;
        user.email = request.body.email;
        user.setPassword(request.body.password);

        user.save(function(err)
            if (err){
                req.status(500).json("error": "Failed to save")
                return;
            } else {
                //create rest of user
            }
        )


    })

}


module.export.login = function(request, response) {

    //Login 
    if (!request.body.email || !request.body.username || !request.body.password) {
        req.status(500).json("error": "All Arguments are required!")
        return;

    } else {

        userModel.findOne({'username': request.body.username}).exec(function(err, returnedUser){
            if (err){
               req.status(500).json("error": "username does not exist!")
               return;
            } else if (returnedUser.comparePassword(request.body.password, returnedUser.password){
                //return json with user and token
            }
            }
        })



    }

}

module.export.verifyToken = function(token, callback) {

    jwt.verifyToken(token, config.secret, function(err, decoded){
        if (err){
            callback(err);
        } else {
            callback(decoded.user.id)
        }
    })


}