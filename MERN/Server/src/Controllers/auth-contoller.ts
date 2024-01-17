import { Request, Response } from "express";
import { ErrorMsg, Success, UserInterface } from "../models";
import { StatusCodes } from "http-status-codes";
import User from "../Models/auth-model";

export const register = async (req: Request, res: Response<ErrorMsg | Success>) => {
    const { username, password, email }: UserInterface = req.body;

    if (!username || !password || !email) {
        return res.status(StatusCodes.FORBIDDEN).json({ msg: "You forgotted to enter either username,password or email", help: "Check the Request Body again" })
    }

    const emailExists = await User.findOne({ email: email })

    if (emailExists) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Email Exists", help: "Try another email or login" })
    }

    try {
        const userData = await User.create({ email, password, username })
        const access_token: string = userData.generateToken()

        return res.status(StatusCodes.ACCEPTED).json({ msg: "Registration Successfull.", access_token: access_token })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something Went Wrong at our end." })
    }
}

export const login = async (req: Request, res: Response<Success | ErrorMsg>) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(StatusCodes.FORBIDDEN).json({ msg: "You forgotted to enter either password or email", help: "Check the Request Body again" })
    }

    const emailFound = await User.findOne({ email })

    if (!emailFound) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Email does'nt Found", help: "Register Your self first" })
    }

    const isValidPassword: boolean = await emailFound.comparePassword(password)

    if (!isValidPassword) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Wrong Password", help: "Reset Your Password" })
    }

    const access_token: string = emailFound.generateToken();

    return res.status(StatusCodes.OK).json({ msg: "Login Successful", access_token: access_token })
}