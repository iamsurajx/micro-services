const mongoose = require("mongoose");
const DB_URL = process.env.DB_URI;


exports.connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB Connection Successful....")
  } catch (error) {
    console.log("Cant Connect with DB ", error);
  }
}