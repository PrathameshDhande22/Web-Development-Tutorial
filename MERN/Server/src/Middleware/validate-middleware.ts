import { ZodError } from "zod";
import { ZodAuthModels } from "../models";
import { NextFunction, Request, Response } from "express";

const validateMiddleware = (schema: ZodAuthModels) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bodyParse = await schema.parseAsync(req.body);
        req.body = bodyParse
        next()
    } catch (err) {
        if (err instanceof ZodError) {
            next({ message: err.issues[0].message })
        }
        else {
            next(err)
        }
    }
}

export default validateMiddleware;