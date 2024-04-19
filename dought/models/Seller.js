const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    sellerName: String,
    typeOfSeller:String,
    aboutSeller:String,
    HeadOffice:String,
    reachUs:String,
});

//const Product = mongoose.model("Product", productSchema);
module.exports = mongoose.model("Seller", sellerSchema);