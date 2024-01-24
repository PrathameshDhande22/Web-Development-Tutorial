"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_model_1 = __importDefault(require("../Models/auth-model"));
const authMiddleware = async (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Include authorization header in the request body." });
    }
    const jwtToken = tokenHeader.replace("Bearer ", "");
    try {
        const userData = (0, jsonwebtoken_1.verify)(jwtToken, String(process.env.SECRET_KEY));
        const userRealData = await auth_model_1.default.findOne({ _id: userData.id }, { password: 0, __v: 0 });
        req.user = userRealData;
        next();
    }
    catch (error) {
        console.log(error);
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ msg: "Invalid JSON Web Token" });
        }
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend Servers" });
    }
};
exports.default = authMiddleware;
