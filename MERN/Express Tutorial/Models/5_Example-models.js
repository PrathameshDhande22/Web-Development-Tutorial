// importing the mongoose package for creating the userSchema and userModel.
const mongoose = require("mongoose");

// hashing the password using bcryptjs for it install it using
// npm i bcryptjs
// importing the bcryptjs
const bcrypt = require("bcryptjs");

// using the jsonwebtoken to generate the jwt token
// ! npm i jsonwebtoken
// importing the jsonwebtoken
const jwt = require("jsonwebtoken");

// defining the Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
});

// these is the middleware for the userSchema before saving the data in the database these middleware will be called.
// using these method we are going to hash the password.
userSchema.pre("save", async function (next) {
  console.log("Data from middleware : ", this);

  try {
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(this.password, salt);

    // storing the hashed password.
    this.password = hashpassword;
    next();
  } catch (err) {
    next(err);
  }
});

// creating the instance methods
userSchema.method("generatetoken", function () {
  try {
    // generating the jwt token to be valid for 20d only.
    console.log("Data from Instance Methods : ", this);
    return jwt.sign(
      {
        id: this._id.toString(),
        email: this.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "20d" }
    );
  } catch (err) {
    console.log(err);
  }
});

// defining the models
const User = new mongoose.model("User", userSchema);

// exporting the User Model
module.exports = User;
