'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    config = require('../config/index.js');
;


var userSchema = new Schema({
    username: { type: String, 
                required: true, 
                index: { unique: true } },
    password: { type: String, required: true }
    email: { type: String, 
             required: true
            }


});


userSchema.pre(save, function(next){ 
    user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt){
        if (err) return next();


        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next();

            user.password = hash;
            next();
        });

    });
});



userSchema.methods.compare = function(enteredPassword, cp) {
    bcrypt.compare(enteredPassword, cp, function(err, isMatch){
        if (err) cp(next());
        cp(null, isMatch)
    }
}





var User = mongoose.model("User", User_Schema);
module.exports.User = User;

