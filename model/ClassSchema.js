const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    city: String,
    ZIP: Number,
    phone: String,
    class: String

})

module.exports = mongoose.model("Class", ClassSchema)