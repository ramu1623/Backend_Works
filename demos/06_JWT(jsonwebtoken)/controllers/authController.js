const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;

  // dummy validation
  if (username !== "admin" || password !== "1234") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

const dashboard = (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user
  });
};

module.exports = { login, dashboard };
