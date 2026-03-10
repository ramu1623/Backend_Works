const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect("mongodb://devisriprasad18:1623ar@127.0.0.1:27017/mongooseCRUD?authSource=admin");
    
    console.log("Database Connected");

  } catch (err) {

    console.log(err);
    process.exit(1);

  }

};

module.exports = connectDB;