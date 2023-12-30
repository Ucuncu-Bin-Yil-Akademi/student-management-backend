const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  phoneNumber: String,
  mail: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = mongoose.model("Student", studentSchema);
