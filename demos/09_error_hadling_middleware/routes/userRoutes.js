const express = require("express");
const router = express.Router();

router.get("/profile", (req, res, next) => {
  // Simulating an error
  const userExists = false;

  if (!userExists) {
    return next(new Error("User not found"));
  }

  res.json({ message: "User profile" });
});

module.exports = router;
