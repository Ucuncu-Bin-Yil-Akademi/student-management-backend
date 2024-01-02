// routes/attendanceRoutes.js
const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

// Define routes
router.post("/record", attendanceController.createOrUpdateAttendance);
router.post("/get", attendanceController.getAttendance);

module.exports = router;
