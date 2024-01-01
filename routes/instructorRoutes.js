const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");

// Define routes
router.post("/create", instructorController.createInstructor);

module.exports = router;
