// connecting our MongoDB Database with ExpressJS
// First install the mongoose package using npm i mongoose
// importing the mongoose package
const mongoose = require("mongoose");

// to use the .env variable in our server we need to install the dotenv package first and setup it in the server.js file.
// Install the dotenv package using npm i dotenv
// Accessing the dotenv variables
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection with Database is successful");
  } catch (error) {
    console.error(error);
  }
};

// exporting the connectDB function
module.exports = connectDB;
