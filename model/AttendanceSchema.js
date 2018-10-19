const mongoose = require("mongoose")

const AttendanceSchema = new mongoose.Schema({
  /* id: {
    type: Id,
    required: true,
    index: true,
    enum: true
  }, */
  student_id: {
    type: String,
    required: true,
  },
  student_class: String,
  date: {
    type: Date,
    default: Date.now()
  },
  date_arrived: Date,
  date_left: Date,
  comment: [{
    text: {
      type: String,
      default: ""
    }
  }],
  excused: Boolean,
  missing: Boolean

})

module.exports = mongoose.model("Attendance", AttendanceSchema)