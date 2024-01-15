const express = require("express");
const router = require("./Router/2_Example.route");
const app = express();

// mounting the route created in the Router Folder.
app.use("/example1", router);

// listening the server
app.listen(2000, () => {
  console.log("Server listening on http://localhost:2000");
});
