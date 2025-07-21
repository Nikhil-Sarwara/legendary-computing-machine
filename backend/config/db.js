const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected... 🍃");
  } catch (err) {
    console.error(err.message);
    console.log("Error: Could not connect to MongoDB");
    console.log("Please check your connection settings");
  }
};

module.exports = connectDB;
