const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided",
    });
  }

  next(); // allow request
};

module.exports = authMiddleware;
