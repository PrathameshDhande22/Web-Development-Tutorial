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
    console.log(error);
    return res.status(403).json({ error: error?.issues[0]?.message });
  }
};

module.exports = validate;
