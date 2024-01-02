const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");

// Define routes
router.post("/create", instructorController.createInstructor);
router.get("/", instructorController.getInstructors);
router.put("/:id/update", instructorController.updateInstructor);
router.delete("/:id/delete", instructorController.deleteInstructor);

module.exports = router;
