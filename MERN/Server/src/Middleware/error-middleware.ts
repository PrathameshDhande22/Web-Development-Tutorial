import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { ErrorMsg } from "../models";

// eslint-disable-next-line
const errorMiddleware = async (err: Error, req: Request, res: Response<ErrorMsg>, next: NextFunction) => {
    const errMessage = err.message
    return res.status(StatusCodes.BAD_GATEWAY).json({ msg: errMessage })
}

export default errorMiddleware;