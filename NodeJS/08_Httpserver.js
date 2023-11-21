// ? HTTP Server

// # Importing the module
const fs = require("fs");
const http = require("http");

// # Defining the Port
const port = 3000;

// # Creating the server
const server = http.createServer((req, res) => {
  console.log("Server Started on URL ", req.url);
  res.statusCode = 200;
  //   $ Sending the data
  if (req.url == "/") {
    // reading the html file
    const fl = fs.readFile(
      "./HTML/index.html",
      { encoding: "utf-8" },
      (err, data) => {
        res.end(data);
      }
    );
  }
});

// # Starting the server
server.listen(port, () => {
  console.log("Server is Started");
});
