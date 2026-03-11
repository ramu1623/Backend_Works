const User = require("../models/User");


// CREATE USER
exports.createUser = async (req, res) => {

  try {

    const user = await User.create(req.body);

    res.json(user);

  } catch (err) {

    res.json(err);

  }

};


// GET ALL USERS
exports.getUsers = async (req, res) => {

  try {

    const users = await User.find();

    res.json(users);

  } catch (err) {

    res.json(err);

  }

};


// GET USER BY ID
exports.getUserById = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    res.json(user);

  } catch (err) {

    res.json(err);

  }

};


// UPDATE USER
exports.updateUser = async (req, res) => {

  try {

    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after", // returns updated document
        runValidators: true      // enables schema validation
      }
    );

    res.json(user);

  } catch (err) {

    res.json(err);

  }

};


// DELETE USER
exports.deleteUser = async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User Deleted" });

  } catch (err) {

    res.json(err);

  }

};