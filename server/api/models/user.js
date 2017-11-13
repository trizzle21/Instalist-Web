'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    config = require('../config/index.js');
;


var userSchema = new Schema({
    _id: Number,
    username: { type: String, 
                required: true, 
                index: { unique: true } },
    password: { type: String, required: true }
    email: { type: String, 
             required: true
            }


});

userSchema.methods.generateToken = function(){
    user = this;


  return token = jwt.sign(user, config.secret, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });

}

userSchema.methods.setPassword = function(enteredPassword){
    user = this;

    bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt){
        if (err) return next();


        bcrypt.hash(enteredPassword, salt, function(err, hash){
            if (err) return next();

            user.password = hash;
            next();
        });

    });
});

}

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



userSchema.methods.comparePassword = function(enteredPasswor, cp) {
    bcrypt.compare(enteredPassword, cp, function(err, isMatch){
        if (err) {
            return false;
        } else {
            return isMatch;
        }
        
    }
}





var User = mongoose.model("User", User_Schema);
module.exports.User = User;

