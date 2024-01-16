// ? Install the ExpressJS and Nodemon package
/*
> npm install express nodemon
*/
// ExpressJS is use for creating the REST API while nodemon is used for watching any changes in the index.js file.

// importing the package
const express = require("express");
const { StatusCodes } = require("http-status-codes");

// creating the application just like the fastapi
const app = express();

// Get request or routing in the home page
app.get("/", (req, res) => {
  res.status(StatusCodes.ACCEPTED).json({
    first: "Hello World",
  });
});

// another get Request.
app.get("/home", (req, res) => {
  res.send("Welcome to the Home Page").status(StatusCodes.OK);
});

// starting the server
app.listen(5000, () => {
  console.log("Server is Listening on port 5000 http://127.0.0.1:5000");
});
