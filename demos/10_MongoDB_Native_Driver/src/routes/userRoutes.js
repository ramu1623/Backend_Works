const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user", userController.createUser);
router.get("/users", userController.getUsers);
router.put("/user/:name", userController.updateUser);
router.delete("/user/:name", userController.deleteUser);

module.exports = router;