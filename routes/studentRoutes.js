// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Define routes
router.post("/create", studentController.createStudent);
router.put("/:id/update", studentController.updateStudent);
router.delete("/:id/delete", studentController.deleteStudent);
router.get("/", studentController.getStudents);

module.exports = router;
