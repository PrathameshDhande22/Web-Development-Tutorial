const { StatusCodes } = require("http-status-codes");

// importing the models.
const User = require("../Models/5_Example-models");

// Controllers help to maintain our routers code clean and neat.
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const home = (req, res) => {
  res
    .status(StatusCodes.OK)
    .send("These is the Home Controller of Example1 route");
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const contact = (req, res) => {
  res
    .send("These is the contact Controllers of Example1 Route")
    .status(StatusCodes.OK);
};

// Post method and accessing the body data
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const register = async (req, res) => {
  console.log(req.body, req.headers, req.cookies);
  res.status(StatusCodes.ACCEPTED).send(req.body);
};

/** Storing the data from the body in the MongoDB.
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const storingdata = async (req, res) => {
  try {
    // accessing the request body
    const { username, email, password } = req.body;
    console.log(username, email, password);

    // checking if the username and email is given in the request body
    if (!username || !email || !password) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Enter the Username and Email in the body" });
    }

    // checking if the email address exists in the database.
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Email Already Exists" });
    }

    // adding the data in the database
    const userdata = await User.create({ username, email, password });

    // sending the jwt token using the instance method
    const jwtoken = userdata.generatetoken();
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ access_token: jwtoken, msg: "Registration Successfull" });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Internal Server Error" });
  }
};

// exporting the controllers.
module.exports = { home, contact, register, storingdata };
