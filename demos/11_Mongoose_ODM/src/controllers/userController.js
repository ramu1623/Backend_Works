const User = require("../models/User");


// CREATE USER
exports.createUser = async (req, res) => {

  try {

    const user = await User.create(req.body);

    // express automatically converts mongoose document to JSON as like toJSON() method
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
    // we can do it with normal updateOne also by this filter { _id: req.params.id }
    const user = await User.findByIdAndUpdate(
      req.params.id,//{ _id: req.params.id } if updateOne is used
      req.body,
      /*{ new: true } Deprecated*/
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
    // we can do it with normal deleteOne also by this filter { _id: req.params.id }
    await User.findByIdAndDelete(req.params.id);
                                //{ _id: req.params.id } if deleteOne is used

    res.json({ message: "User Deleted" });

  } catch (err) {

    res.json(err);

  }

};