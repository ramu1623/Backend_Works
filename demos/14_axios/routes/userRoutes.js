const express = require("express");

const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController");


// GET
router.get("/users", getUsers);


// POST
router.post("/users", createUser);


// PUT
router.put("/users/:id", updateUser);


// PATCH
router.patch("/users/:id", patchUser);


// DELETE
router.delete("/users/:id", deleteUser);


module.exports = router;