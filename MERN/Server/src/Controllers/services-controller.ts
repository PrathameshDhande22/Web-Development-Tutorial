import { Request, Response } from "express";
import Service from "../Models/services-models";
import { StatusCodes } from "http-status-codes";

export const services = async (req: Request, res: Response) => {
    try {
        const serviceData = await Service.find({}, { _id: 0 });
        return res.status(StatusCodes.OK).json({ services: serviceData })
    }
    catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend" })
    }
}