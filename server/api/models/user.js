'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    SALT_WORK_FACTOR = 10;


var userSchema = new Schema({
    username: { type: String, 
                required: true, 
                index: { unique: true } },
    password: { type: String, required: true }
    email: { type: String, 
             required: true
            }


});





var User = mongoose.model("User", User_Schema);
module.exports.User = User;

