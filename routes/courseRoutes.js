// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Define routes
router.post("/create", courseController.createCourse);
router.put("/:id/update", courseController.updateCourse);
router.delete("/:id/delete", courseController.deleteCourse);

module.exports = router;
