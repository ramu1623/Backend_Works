const express = require("express");
const helmet = require("helmet");
const path = require("path");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// 🔐 Helmet – security headers (AUTO)
app.use(helmet());

// parse normal form data
app.use(express.urlencoded({ extended: true }));

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/upload",uploadRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
