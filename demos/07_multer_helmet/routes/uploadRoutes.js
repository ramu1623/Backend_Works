const express = require("express");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post(
  "/",
  upload.single("profile"),
  (req, res) => {
    // file info
    console.log(req.file);

    // text fields
    console.log(req.body);

    res.send("Profile picture uploaded successfully");
  }
);

module.exports = router;
