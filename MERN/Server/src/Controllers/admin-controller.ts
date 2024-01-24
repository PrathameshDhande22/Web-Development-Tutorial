import { Request, Response } from "express";
import contactModel from "../Models/contact-model";
import { StatusCodes } from "http-status-codes";
import User from "../Models/auth-model";
import { UserInterface, VerifyRequest } from "../models";
import Service from "../Models/services-models";

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
        let usersData = await User.find({}, { password: 0, __v: 0 })

        const adminData = (req as VerifyRequest).user

        usersData = usersData.filter((value) => adminData.email !== value.email)

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

        const adminID = String((req as VerifyRequest).user._id)

        const userwithAdmin = await User.findOne({ _id: id })


        if (adminID === id || userwithAdmin?.isAdmin) {
            return res.status(StatusCodes.FORBIDDEN).json({ msg: "You cannot Delete Admin" })
        }
        const deleteUser = await User.deleteOne({ _id: id })

        if (deleteUser.deletedCount === 0) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: `User with id:${id} Not found in the Server` })
        }
        return res.status(StatusCodes.OK).json({ msg: "User deleted successfully" })

    } catch (error) {
        console.log(error)

        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "Invalid User ID" })
            }
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the Userid in the Path Parameter to Get the User" })
        }

        const userData = await User.findOne({ _id: id }, { password: 0, __v: 0 })

        if (!userData) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `User with id:${id} Not found in the Server` })
        }

        return res.status(StatusCodes.OK).json({ user: userData })

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "Invalid User ID" })
            }
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}

export const deleteContactByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the ContactID in the Path Parameter to Get the Contacts" })
        }

        const deleteContact = await contactModel.deleteOne({ _id: id })

        if (deleteContact.deletedCount === 0) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: `Contact with id:${id} Not found in the Server` })
        }
        return res.status(StatusCodes.OK).json({ msg: "Contact deleted successfully" })

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "Invalid Contact ID" })
            }
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const body: UserInterface = req.body
        const id = req.params.id;
        const updateuser = await User.updateOne({ _id: id }, { $set: body })
        if (updateuser.matchedCount === 0) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: `User with id:${id} Not found in the Server` })
        }
        return res.status(StatusCodes.OK).json({ msg: "User Updated Successfully" })
    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "Invalid User ID" })
            }
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}

export const getServices = async (req: Request, res: Response) => {
    try {
        const servicesData = await Service.find({})
        return res.status(StatusCodes.OK).json({ services: servicesData })
    } catch (err) {
        console.log(err)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend Servers." })
    }
}

export const deleteServiceById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the Serviceid in the Path Parameter to Get the Services" })
        }

        const deleteService = await Service.deleteOne({ _id: id })

        if (deleteService.deletedCount === 0) {
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: `Service with id:${id} Not found in the Server` })
        }
        return res.status(StatusCodes.OK).json({ msg: "Service deleted successfully" })

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "Invalid Service ID" })
            }
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" })
    }
}
