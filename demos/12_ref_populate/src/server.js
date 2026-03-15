const express = require("express");
const connectDB = require("./config/db");

const postRoutes = require("./routes/post.routes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api", postRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});