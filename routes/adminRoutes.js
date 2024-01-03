// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Define routes
router.post("/create", adminController.createAdmin);
router.delete("/:id/delete", adminController.deleteAdmin);
router.get("/", adminController.getAdmins);
router.post("/login", adminController.loginAdmin);

module.exports = router;
