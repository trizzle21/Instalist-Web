//

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var groupSchema = new Schema({
  name: String,
  _groupID:String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  memberCount: Number,
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive', 'pending']
    }],
    default: ['pending']
  }
  
})


module.exports = mongoose.model('Group', groupSchema);
