const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    required: true
  },
  typeOfSeller: {
    type: String,
    required: true
  },
  aboutUs: {
    type: String,
    required: true
  },
  reachUs: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Seller', sellerSchema);