"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const contactZodValidator = zod_1.z.object({
    username: zod_1.z.string({
        invalid_type_error: "Username must be a string", required_error: "Username is required", description: "Username is required to uniquely identify you."
    }).min(5, { message: "username must be greater than 5 characters" }).trim(),
    email: zod_1.z.string({
        invalid_type_error: "Email must be a string", required_error: "Email is required", description: "Email will be required while logining to your account."
    }).email({ message: "Email is Required" }).trim(),
    message: zod_1.z.string({
        invalid_type_error: "Message Must be a string", required_error: "Message is required"
    }).trim()
});
exports.default = contactZodValidator;
