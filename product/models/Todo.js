const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Todo", todoSchema);
