// importing the expressJS Package
const express = require("express");

// Using the Router Function
const router = express.Router();

// assiging the methods for the router
router.get("/try1", (req, res) => {
  res.status(200).json({
    ans: "These is the Example of the example1 router with route /try1",
  });
});

// another method to create the route with the methods chaining.
router.route("/try2").get((req, res) => {
  res
    .status(200)
    .send("These is the Example of the example1 Router with route /try2");
});

// Exporting the Router Function to be used in the server.js file
module.exports = router;
