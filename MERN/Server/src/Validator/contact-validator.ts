import { z } from "zod";


const contactZodValidator = z.object({
    username: z.string({
        invalid_type_error: "Username must be a string", required_error: "Username is required", description: "Username is required to uniquely identify you."
    }).min(5, { message: "username must be greater than 5 characters" }).trim(),
    email: z.string({
        invalid_type_error: "Email must be a string", required_error: "Email is required", description: "Email will be required while logining to your account."
    }).email({ message: "Email is Required" }).trim(),
    message: z.string({
        invalid_type_error: "Message Must be a string", required_error: "Message is required"
    }).trim()
})

export default contactZodValidator;