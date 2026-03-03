const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

app.use(express.json());

app.use("/api/auth", authRoutes);   // public routes
app.use("/api/user", userRoutes);   // protected routes

module.exports = app;
