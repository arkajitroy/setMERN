const mongoose = require("mongoose");

const connectMongoDB = async (mongoURI) => {
  try {
    const databaseConnection = await mongoose.connect(mongoURI);
    console.log("Successfully Connected to MongoDB !!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
