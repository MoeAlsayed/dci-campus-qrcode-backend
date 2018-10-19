const mongoose = require("mongoose")

const AbsencesSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: {
        type: String,
        required: true,
        index: true,
        enum: true
    },
    birthdate: {
        type: Number,
        required: true,
        index: true,
        enum: true
    },
    city: String,
    ZIP: Number,
    phone: String,
    class: String

})

module.exports = mongoose.model("Absences", AbsencesSchema)