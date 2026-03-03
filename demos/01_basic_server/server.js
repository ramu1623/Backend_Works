// 1️⃣ Import express
const express = require("express");

// 2️⃣ Create app instance
const app = express();

// 3️⃣ Route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// 4️⃣ Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});