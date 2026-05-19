const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");


// Middleware
app.use(express.json());


// Routes
app.use("/api", userRoutes);


// Server
app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});