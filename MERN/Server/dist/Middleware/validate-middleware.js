"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validateMiddleware = (schema) => async (req, res, next) => {
    try {
        const bodyParse = await schema.parseAsync(req.body);
        req.body = bodyParse;
        next();
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            next({ message: err.issues[0].message });
        }
        else {
            next(err);
        }
    }
};
exports.default = validateMiddleware;
