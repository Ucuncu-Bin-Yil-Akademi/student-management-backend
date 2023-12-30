const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  date: Date,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = mongoose.model("Attendance", attendanceSchema);
