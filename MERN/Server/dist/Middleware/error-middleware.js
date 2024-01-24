"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
// eslint-disable-next-line
const errorMiddleware = async (err, req, res, next) => {
    const errMessage = err.message;
    return res.status(http_status_codes_1.StatusCodes.BAD_GATEWAY).json({ msg: errMessage });
};
exports.default = errorMiddleware;
