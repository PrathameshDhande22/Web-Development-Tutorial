// configuring the dotenv file to be used in the server
require("dotenv").config();

const express = require("express");
const router = require("./Router/2_Example.route");
const router6 = require("./Router/6_Example.route");
const app = express();

// using connecting the database.
const connectDB = require("./Utils/4_Database");
const errorMiddleware = require("./Middleware/7_Error-Middleware");
const router8 = require("./Router/8_Example.route");

// Before accessing any body data it is essential to add the json middleware for accepting all the data in json format.
app.use(express.json());

// mounting the route created in the Router Folder.
app.use("/example1", router);
app.use("/example6", router6);
app.use("/example8", router8);

// using the error Middleware
app.use(errorMiddleware);

// when the connection with database is successful then only the server will start.
connectDB().then(() => {
  // listening the server
  app.listen(2000, () => {
    console.log("Server listening on http://localhost:2000");
  });
});
