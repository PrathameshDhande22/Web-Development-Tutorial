import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ErrorMsg, JSONWebTokenData, UserInterface, VerifyRequest } from "../models";
import { verify } from "jsonwebtoken"
import User from "../Models/auth-model";

const authMiddleware = async (req: Request, res: Response<ErrorMsg>, next: NextFunction) => {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Include authorization header in the request body." })
    }

    const jwtToken: string = tokenHeader.replace("Bearer ", "")

    try {

        const userData = verify(jwtToken, String(process.env.SECRET_KEY));

        const userRealData = await User.findOne({ _id: (userData as JSONWebTokenData).id }, { password: 0, __v: 0 });

        (req as VerifyRequest).user = (userRealData as UserInterface)
        next();

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend Servers" })
    }
}

export default authMiddleware;