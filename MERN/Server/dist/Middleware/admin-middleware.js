"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const adminMiddleware = async (req, res, next) => {
    try {
        const userisAdmin = req.user.isAdmin;
        if (!userisAdmin) {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized you are not a admin" });
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = adminMiddleware;
