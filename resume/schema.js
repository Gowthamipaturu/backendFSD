const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refrigeratorSchema = new Schema({
    brand: {type: String, required: true},
    color: {type: String, required: true},
    withBaseDrawer: {type: String, default: yes},
    RefrigeratorType: {type: String, required: true},
    CompressorType: {type: String, required: true},
    Capacity: {type: Text, required: true},
    NumberOfDoors: {type: Number, required: true},
    ToughenedGlass: {type: String, default: yes},
    Ratings: {type: Number, required: true},
    BuiltInStabilizer: {type: String, required: true},
    DoorLock: {type: String, default: yes}
})

module.exports = mongoose.model("Refrigerator", refrigeratorSchema);