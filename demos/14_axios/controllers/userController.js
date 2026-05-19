const {
  getUsersService,
  createUserService,
  updateUserService,
  patchUserService,
  deleteUserService,
} = require("../services/userService");


// ================= GET USERS =================
const getUsers = async (req, res) => {

  try {

    const users = await getUsersService();

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// ================= CREATE USER =================
const createUser = async (req, res) => {

  try {

    const newUser = await createUserService(req.body);

    res.status(201).json(newUser);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// ================= UPDATE USER =================
const updateUser = async (req, res) => {

  try {

    const updatedUser = await updateUserService(
      req.params.id,
      req.body
    );

    res.status(200).json(updatedUser);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// ================= PATCH USER =================
const patchUser = async (req, res) => {

  try {

    const patchedUser = await patchUserService(
      req.params.id,
      req.body
    );

    res.status(200).json(patchedUser);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// ================= DELETE USER =================
const deleteUser = async (req, res) => {

  try {

    await deleteUserService(req.params.id);

    res.status(200).json({
      message: "User Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getUsers,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
};