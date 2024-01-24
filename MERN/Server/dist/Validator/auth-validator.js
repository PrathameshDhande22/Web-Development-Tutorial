"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string({ invalid_type_error: "Username must be a string", required_error: "Username is required", description: "Username is required to uniquely identify you." }).min(5, { message: "username must be greater than 5 characters" }).trim(),
    password: zod_1.z.string({ invalid_type_error: "Password must be a string", required_error: "Password is required", description: "Password is required to identify your account." }).min(5, { message: "password must be greater than 5 characters" }).max(16, { message: "password must be less than 16 characters" }).trim(),
    email: zod_1.z.string({ invalid_type_error: "Email must be a string", required_error: "Email is required", description: "Email will be required while logining to your account." }).email({ message: "Email is Required" }).trim(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string({ invalid_type_error: "Email must be a string", required_error: "Email is required", description: "Email will be required while logining to your account." }).email({ message: "Email is Required" }).trim(),
    password: zod_1.z.string({ invalid_type_error: "Password must be a string", required_error: "Password is required", description: "Password is required to identify your account." }).min(5, { message: "password must be greater than 5 characters" }).max(16, { message: "password must be less than 16 characters" }).trim(),
});
