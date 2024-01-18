// creating the error middleware which will be called when ever the error occurs in our backend.
// eslint-disable-next-line
const errorMiddleware = async (err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extradetails = err.extradetails || "Something went wrong";

  return res.status(status).json({ message, extradetails });
};

// exporting the error middleware
module.exports = errorMiddleware;
