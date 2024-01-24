"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    const URI = String(process.env.MONGODB_URI);
    try {
        await mongoose_1.default.connect(URI);
        console.log("Connection with Database Successful.");
    }
    catch (error) {
        console.log("Connection with Database Failed.");
    }
};
exports.default = connectDB;
