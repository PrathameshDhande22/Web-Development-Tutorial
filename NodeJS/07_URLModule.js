// ? URL Module

// $ Importing the module
const url = require("url");

// $ Using the URL Module
const myurl = new url.URL("https://www.example.com");
console.log(myurl);
myurl.pathname = "/page2";
myurl.search = "active=false";
console.log(myurl.href);
