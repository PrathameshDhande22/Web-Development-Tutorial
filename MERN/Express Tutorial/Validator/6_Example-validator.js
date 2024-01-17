// validating the data from the user body request using zod.
// ! npm i zod
// Import the zod package
const { z } = require("zod");

// create the uservalidate schema just like the userSchema Created in Models.
// here creating the schema using zod.
const userValidateSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, { message: "Username must be Greater than 4 Character" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email is Required" }),
  password: z
    .string()
    .trim()
    .min(5, { message: "Password must be greater than 5 characters" })
    .max(10, { message: "Password must be of 10 characters" }),
});

// exporting the schema.
module.exports = userValidateSchema;
