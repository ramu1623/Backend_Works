const loginUser = (req, res) => {
  // business logic (DB check, password match etc.)
  res.json({ message: "Login successful" });
};

const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};

module.exports = {
  loginUser,
  registerUser,
};
