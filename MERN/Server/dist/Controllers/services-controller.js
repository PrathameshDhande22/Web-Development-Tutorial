"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const services_models_1 = __importDefault(require("../Models/services-models"));
const http_status_codes_1 = require("http-status-codes");
const services = async (req, res) => {
    try {
        const serviceData = await services_models_1.default.find({}, { _id: 0 });
        return res.status(http_status_codes_1.StatusCodes.OK).json({ services: serviceData });
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend" });
    }
};
exports.services = services;
