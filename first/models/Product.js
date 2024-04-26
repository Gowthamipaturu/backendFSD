const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  warranty: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Product', productSchema);