const express = require("express");
const app = express();

/* -----------------------------
   Built-in Middleware
------------------------------ */
app.use(express.json());

/* -----------------------------
   BASIC ROUTE
------------------------------ */
app.get("/", (req, res) => {
  res.send("Server is running");
});

/* -----------------------------
   USER ROUTES (CRUD)
------------------------------ */

// GET all users
app.get("/users", (req, res) => {
  res.send("Get all users");
});

// GET user by ID (Route Parameter)
app.get("/users/:id", (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

// CREATE new user
app.post("/users", (req, res) => {
  res.send("User created");
});

// UPDATE full user
app.put("/users/:id", (req, res) => {
  res.send(`User ${req.params.id} fully updated`);
});

// UPDATE partial user
app.patch("/users/:id", (req, res) => {
  res.send(`User ${req.params.id} partially updated`);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

/* -----------------------------
   PROFILE ROUTES (NO OPTIONAL PARAM)
------------------------------ */

// Profile without ID
app.get("/profile", (req, res) => {
  res.send("Profile page");
});

// Profile with ID
app.get("/profile/:id", (req, res) => {
  res.send(`Profile ID: ${req.params.id}`);
});

/* -----------------------------
   ROUTE CHAINING
------------------------------ */
app
  .route("/account")
  .get((req, res) => res.send("Get account"))
  .post((req, res) => res.send("Create account"))
  .put((req, res) => res.send("Update account"));

/* -----------------------------
   START SERVER
------------------------------ */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
