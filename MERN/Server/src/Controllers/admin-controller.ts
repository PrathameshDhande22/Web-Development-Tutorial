import { Request, Response } from "express";
import contactModel from "../Models/contact-model";
import { StatusCodes } from "http-status-codes";
import User from "../Models/auth-model";

export const getContacts = async (req: Request, res: Response) => {
    try {
        const contactsData = await contactModel.find({}, { __v: 0 })
        return res.status(StatusCodes.OK).json({ contacts: contactsData })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend Servers." })
    }
}


export const getUsers = async (req: Request, res: Response) => {
    try {
        const usersData = await User.find({}, { password: 0, __v: 0 })
        return res.status(StatusCodes.OK).json({ users: usersData })
    }
    catch (err) {
        console.log(err)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the Userid in the Path Parameter to delete the User" })
        }

        const deleteUser = await User.deleteOne({ _id: id })

        if (deleteUser.deletedCount === 0) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: `User with id:${id} Not found in the Server` })
        }
        return res.status(StatusCodes.OK).json({ msg: "User deleted successfully" })

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}