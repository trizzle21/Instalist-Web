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
});

});


userSchema.pre(save, function(next){
    var user = this;
}



    )