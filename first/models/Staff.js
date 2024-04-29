const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staffid: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  phoneno: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  emailid: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Staff', staffSchema);