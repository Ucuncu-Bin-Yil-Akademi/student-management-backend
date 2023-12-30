const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: String,
  startDate: Date,
  endDate: Date,
  totalHours: Number,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = mongoose.model("Course", courseSchema);
