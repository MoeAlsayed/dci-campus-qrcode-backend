const mongoose = require("mongoose")

const StudentsSchema = new mongoose.Schema({
  xman: Number,
  firstName: String,
  lastName: String,
  email: {
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

module.exports = mongoose.model("Student", StudentsSchema)