const express = require("express");
const app = express();

app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// ❗ Error-handling middleware (ALWAYS LAST)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
