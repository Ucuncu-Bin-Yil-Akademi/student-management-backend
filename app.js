// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://cberen15:717235Cb.@wuubimedia.qfs2zro.mongodb.net/",
  {
    dbName: "uby-student-management",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const classRoutes = require("./routes/classRoutes");

app.use("/students", studentRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/classes", classRoutes);
app.use("/instructors", require("./routes/instructorRoutes"));
app.use("/admins", require("./routes/adminRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
