"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.login = exports.register = void 0;
const http_status_codes_1 = require("http-status-codes");
const auth_model_1 = __importDefault(require("../Models/auth-model"));
const register = async (req, res) => {
    const { username, password, email } = req.body;
    const emailExists = await auth_model_1.default.findOne({ email: email });
    if (emailExists) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Email Exists", help: "Try another email or login" });
    }
    try {
        const userData = await auth_model_1.default.create({ email, password, username });
        const access_token = userData.generateToken();
        return res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({ msg: "Registration Successfull.", access_token: access_token });
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something Went Wrong at our end." });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const emailFound = await auth_model_1.default.findOne({ email });
        if (!emailFound) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Email does'nt Found", help: "Register Your self first" });
        }
        const isValidPassword = await emailFound.comparePassword(password);
        if (!isValidPassword) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Wrong Password", help: "Reset Your Password" });
        }
        const access_token = emailFound.generateToken();
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Login Successful", access_token: access_token });
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "Internal Server Error" });
    }
};
exports.login = login;
const users = async (req, res) => {
    const userData = req.user;
    return res.status(http_status_codes_1.StatusCodes.OK).json(userData);
};
exports.users = users;
