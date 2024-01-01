const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");

// Define routes
router.post("/create", classController.createClass);
router.put("/:id/update", classController.updateClass);
router.delete("/:id/delete", classController.deleteClass);
router.get("/:id", classController.getClassById);
router.get("/", classController.getClasses);

module.exports = router;
