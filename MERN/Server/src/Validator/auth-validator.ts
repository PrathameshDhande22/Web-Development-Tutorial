import { z } from "zod"

export const registerSchema = z.object({
    username: z.string({ invalid_type_error: "Username must be a string", required_error: "Username is required", description: "Username is required to uniquely identify you." }).min(5, { message: "username must be greater than 5 characters" }).trim(),
    password: z.string({ invalid_type_error: "Password must be a string", required_error: "Password is required", description: "Password is required to identify your account." }).min(5, { message: "password must be greater than 5 characters" }).max(16, { message: "password must be less than 16 characters" }).trim(),
    email: z.string({ invalid_type_error: "Email must be a string", required_error: "Email is required", description: "Email will be required while logining to your account." }).email({ message: "Email is Required" }).trim(),
})

export const loginSchema = z.object({
    email: z.string({ invalid_type_error: "Email must be a string", required_error: "Email is required", description: "Email will be required while logining to your account." }).email({ message: "Email is Required" }).trim(),
    password: z.string({ invalid_type_error: "Password must be a string", required_error: "Password is required", description: "Password is required to identify your account." }).min(5, { message: "password must be greater than 5 characters" }).max(16, { message: "password must be less than 16 characters" }).trim(),
})