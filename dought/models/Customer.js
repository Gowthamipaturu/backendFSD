const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name: String,
    phoneNumber:String,
    email:String,
    Address: String,
    orderHistory:String    
});

module.exports = mongoose.model("Customer", customerSchema);