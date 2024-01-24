import { NextFunction, Request, Response } from "express";
import { VerifyRequest } from "../models";
import { StatusCodes } from "http-status-codes";

const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userisAdmin = (req as VerifyRequest).user.isAdmin
        if (!userisAdmin) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized you are not a admin" })
        }
        next()
    }
    catch (error) {
        next(error)
    }
}

export default adminMiddleware