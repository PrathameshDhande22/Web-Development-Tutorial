const User = require("../Models/5_Example-models");
const { StatusCodes } = require("http-status-codes");

const getData = async (req, res) => {
  try {
    // accessing the request body
    const { username, email, password } = req.body;
    console.log(username, email, password);

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

module.exports = getData;
