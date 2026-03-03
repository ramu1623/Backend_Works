const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const {
  getDashboard,
  getProfile,
} = require("../controllers/user.controller");

// 🔐 Router-level middleware
router.use(authMiddleware);

router.get("/dashboard", getDashboard);
router.get("/profile", getProfile);

module.exports = router;
