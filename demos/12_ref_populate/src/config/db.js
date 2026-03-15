const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://devisriprasad18:1623ar@127.0.0.1:27017/mongooseRelations?authSource=admin");

  console.log("MongoDB Connected");
};

module.exports = connectDB;