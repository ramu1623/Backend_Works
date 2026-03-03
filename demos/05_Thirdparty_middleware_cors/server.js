const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",              // Development (React local)
  "https://myfrontend.vercel.app"       // Production (Deployed frontend)
];

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, curl)
    if (!origin) return callback(null, true);

    // allow only listed origins
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // block others
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

// Built-in middleware
app.use(express.json());

// Test route
app.get("/api/data", (req, res) => {
  res.json({ message: "CORS is working correctly" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
