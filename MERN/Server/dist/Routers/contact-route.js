"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../Middleware/validate-middleware"));
const contact_validator_1 = __importDefault(require("../Validator/contact-validator"));
const contact_controller_1 = require("../Controllers/contact-controller");
const contactRouter = (0, express_1.Router)();
contactRouter.post("/contact", (0, validate_middleware_1.default)(contact_validator_1.default), contact_controller_1.sendContactInformation);
exports.default = contactRouter;
