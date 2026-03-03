const express = require("express");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.json());

// first -> routes
app.use("/api/auth", authRoutes);

// second -> serve frontend
app.use(express.static(path.join(__dirname, "public"))); //without join it fails in deployment

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
