// Step 1: Import MongoClient
const { MongoClient } = require("mongodb");

// Step 2: Create client
const client = new MongoClient("mongodb://devisriprasad18:1623ar@127.0.0.1:27017/?authSource=admin");

let db;

// Step 3: Connect only once
async function connectDB() {
  await client.connect();
  db = client.db("mydatabase");
  console.log("MongoDB Connected");
}

// Step 4: Getter function
function getDB() {
  return db;
}

module.exports = { connectDB, getDB };