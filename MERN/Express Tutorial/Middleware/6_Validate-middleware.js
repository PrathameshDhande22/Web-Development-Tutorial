// Creating the validate middleware function for vaidating the data from the body

// these is the callback function the parameter you see that schema passing the our zod created schema.
const validate = (schema) => async (req, res, next) => {
  try {
    // validating the schema
    const bodyParse = await schema.parseAsync(req.body);
    req.body = bodyParse;

    next();
  } catch (error) {
    // handling the error when ever the user gives the wrong input
    // console.log(error);
    const err = {
      status: 404,
      message: error?.issues[0]?.message,
      extradetails: "Fill the details correctly",
    };

    // calling the error middleware
    next(err);
  }
};

module.exports = validate;
