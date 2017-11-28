//

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var listSchema = new Schema({
  name: String,
  _listid:Number,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  itemCount: Number,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive']
    }],
  }
  
})


module.exports = mongoose.model('Group', groupSchema);
