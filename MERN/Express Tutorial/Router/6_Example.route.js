const express = require("express");

// importing the validator middleware
const validate = require("../Middleware/6_Validate-middleware");

// importing the validator Schema
const userValidateSchema = require("../Validator/6_Example-validator");
const getData = require("../Controllers/6_Example-controller");

const router6 = express.Router();

router6.post("/save", validate(userValidateSchema), getData);

module.exports = router6;
