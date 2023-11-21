// ? File System

// # Importing the file system module
const fs = require("fs");

// # Using the method of fs
// $ Writing to a file
fs.writeFile(
  "file.txt",
  "hello this is the new file",
  { encoding: "utf-8" },
  (err) => [console.log(err)]
);

//$ Reading the file
fs.readFile("file.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(err, data);
});

//$ Reading the file using the sync
const data = fs.readFileSync("file.txt");
console.log(data.toString("utf8"));
