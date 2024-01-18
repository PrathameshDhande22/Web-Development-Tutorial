import { Model } from "mongoose";
import { loginSchema, registerSchema } from "./Validator/auth-validator";
import contactZodValidator from "./Validator/contact-validator";

export declare interface Message {
    msg: string,
}

export declare type ErrorMsg = {
    msg: string;
    help?: string;
}

export declare interface UserInterface {
    username: string,
    password: string,
    email: string,
    isAdmin?: boolean
}

export declare interface Success extends User {
    access_token: string;
}

export declare interface AuthMethods {
    generateToken(): string;
    comparePassword(password: string): Promise<boolean>;
}

export declare type AuthModels = Model<UserInterface, unknown, AuthMethods>

export declare type ZodAuthModels = typeof registerSchema | typeof loginSchema | typeof contactZodValidator

export declare interface ContactInterface {
    username: string,
    email: string,
    message: string;
}