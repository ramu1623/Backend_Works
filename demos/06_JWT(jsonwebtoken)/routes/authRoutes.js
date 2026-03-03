const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/login", login);
router.get("/dashboard", verifyToken, dashboard);

module.exports = router;
