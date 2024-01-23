const app = require("express");
const router8 = app.Router();
const example8Controller = require("../Controllers/8_Example-controller");

router8.get("/user/:id", example8Controller);

module.exports = router8;
