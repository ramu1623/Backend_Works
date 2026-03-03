const express = require("express");
const app = express();
const PORT = 3000;

/* --------------------------------------------------
   1️⃣ Global Logger Middleware
   - Runs for EVERY request
   - Logs method, URL, and time
-------------------------------------------------- */
app.use((req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Time:", new Date().toLocaleTimeString());
  console.log("-------------------------");

  next(); // move to next middleware or route
});

/* --------------------------------------------------
   2️⃣ JSON Body Parser Middleware
   - Parses JSON request body
   - Needed for POST/PUT/PATCH
-------------------------------------------------- */
app.use(express.json());

/* --------------------------------------------------
   3️⃣ Admin Middleware
   - Runs ONLY for routes starting with /admin
   - Blocks access if not admin
-------------------------------------------------- */
app.use("/admin", (req, res, next) => {
  const isAdmin = false; // simulate admin check

  if (!isAdmin) {
    return res.status(403).send("Access Denied: Admins Only");
  }

  next(); // allow access to admin routes
});

/* --------------------------------------------------
   Routes
-------------------------------------------------- */

// Home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Create user (expects JSON body)
app.post("/user", (req, res) => {
  res.send({
    message: "User created",
    data: req.body
  });
});

// Admin dashboard (protected)
app.get("/admin/dashboard", (req, res) => {
  res.send("Welcome Admin");
});

/* --------------------------------------------------
   Start Server
-------------------------------------------------- */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
