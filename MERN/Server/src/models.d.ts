import { Model } from "mongoose";

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