const express = require("express");
const app = express();

/*
|--------------------------------------------------------------------------
| 1️⃣ Parse JSON data (React / API requests)
|--------------------------------------------------------------------------
| Used when frontend sends JSON using fetch / axios
*/
app.use(express.json());

/*
|--------------------------------------------------------------------------
| 2️⃣ Parse HTML form data
|--------------------------------------------------------------------------
| Used when data comes from <form method="POST">
| Content-Type is auto: application/x-www-form-urlencoded
*/
app.use(express.urlencoded({ extended: true }));

/*
|--------------------------------------------------------------------------
| 3️⃣ Serve static files (HTML, CSS, JS, images)
|--------------------------------------------------------------------------
| Browser can directly access files from "public" folder
*/
app.use(express.static("public"));

/*
|--------------------------------------------------------------------------
| 4️⃣ Parse plain text data
|--------------------------------------------------------------------------
| Used for simple text payloads (rare cases, webhooks)
*/
app.use(express.text());

/*
|--------------------------------------------------------------------------
| 5️⃣ Parse raw binary data
|--------------------------------------------------------------------------
| Used for binary data, payment webhooks, crypto verification
*/
app.use(express.raw({ type: "application/octet-stream" }));

/*
|--------------------------------------------------------------------------
| ROUTES
|--------------------------------------------------------------------------
*/

/* JSON API (MOST COMMON) */
app.post("/api/login", (req, res) => {
  console.log("JSON data:", req.body);
  res.send("JSON received");
});

/* HTML FORM submit */
app.post("/form-login", (req, res) => {
  console.log("Form data:", req.body);
  res.send("Form data received");
});

/* Plain text */
app.post("/text", (req, res) => {
  console.log("Text data:", req.body);
  res.send("Text received");
});

/* Raw binary */
app.post("/raw", (req, res) => {
  console.log("Raw data:", req.body); // Buffer
  res.send("Raw data received");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
