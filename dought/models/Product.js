// Product Schema
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    modelNumber: Number,
    color:String,
    brand:String,
    ram: String
});

//const Product = mongoose.model("Product", productSchema);
module.exports = mongoose.model("Product", productSchema);
