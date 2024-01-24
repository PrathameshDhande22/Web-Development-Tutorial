"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactInformation = void 0;
const contact_model_1 = __importDefault(require("../Models/contact-model"));
const http_status_codes_1 = require("http-status-codes");
const sendContactInformation = async (req, res) => {
    const { email, message, username } = req.body;
    try {
        await contact_model_1.default.create({ email: email, message: message, username: username });
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Your Contact Information has been recorded." });
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_codes_1.StatusCodes.BAD_GATEWAY).json({ msg: "Internal Server Error" });
    }
};
exports.sendContactInformation = sendContactInformation;
