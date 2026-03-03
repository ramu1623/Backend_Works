const getDashboard = (req, res) => {
  res.send("Welcome to User Dashboard");
};

const getProfile = (req, res) => {
  res.send("User Profile Page");
};

module.exports = {
  getDashboard,
  getProfile,
};
