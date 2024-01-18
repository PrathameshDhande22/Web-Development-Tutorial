import { Request, Response } from "express";
import { ContactInterface, ErrorMsg, Message } from "../models";
import contactModel from "../Models/contact-model";
import { StatusCodes } from "http-status-codes";

export const sendContactInformation = async (req: Request, res: Response<Message | ErrorMsg>) => {

    const { email, message, username }: ContactInterface = req.body;

    try {
        await contactModel.create({ email: email, message: message, username: username })

        return res.status(StatusCodes.OK).json({ msg: "Your Contact Information has been recorded." })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_GATEWAY).json({ msg: "Internal Server Error" })
    }
}