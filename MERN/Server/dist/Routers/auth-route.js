"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_contoller_1 = require("../Controllers/auth-contoller");
const validate_middleware_1 = __importDefault(require("../Middleware/validate-middleware"));
const auth_validator_1 = require("../Validator/auth-validator");
const auth_middleware_1 = __importDefault(require("../Middleware/auth-middleware"));
const authRouter = (0, express_1.Router)({});
authRouter.post("/register", (0, validate_middleware_1.default)(auth_validator_1.registerSchema), auth_contoller_1.register);
authRouter.post("/login", (0, validate_middleware_1.default)(auth_validator_1.loginSchema), auth_contoller_1.login);
authRouter.get("/users", auth_middleware_1.default, auth_contoller_1.users);
exports.default = authRouter;
