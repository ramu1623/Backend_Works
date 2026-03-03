
const express = require("express");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

// Start server after DB connection
connectDB().then(() => {
  app.listen(5000, () => {
    console.log(`Server running on port 5000`);
  });
});