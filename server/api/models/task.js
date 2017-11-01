
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var taskSchema = new Schema({
  name: String,
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive']
    }],
    default: ['pending']
  }

});


module.exports = mongoose.model('Task', taskSchema);

