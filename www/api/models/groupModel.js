//

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var groupSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  users: {

  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive', 'pending']
    }],
    default: ['pending']
  }



})


module.exports = mongoose.model('Group', groupSchema);
