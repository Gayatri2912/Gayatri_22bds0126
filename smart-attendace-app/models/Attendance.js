// backend/models/Attendance.js
const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
