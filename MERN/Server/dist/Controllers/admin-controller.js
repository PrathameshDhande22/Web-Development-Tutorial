"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServiceById = exports.getServices = exports.updateUserById = exports.deleteContactByID = exports.getUserByID = exports.deleteUser = exports.getUsers = exports.getContacts = void 0;
const contact_model_1 = __importDefault(require("../Models/contact-model"));
const http_status_codes_1 = require("http-status-codes");
const auth_model_1 = __importDefault(require("../Models/auth-model"));
const services_models_1 = __importDefault(require("../Models/services-models"));
const getContacts = async (req, res) => {
    try {
        const contactsData = await contact_model_1.default.find({}, { __v: 0 });
        return res.status(http_status_codes_1.StatusCodes.OK).json({ contacts: contactsData });
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend Servers." });
    }
};
exports.getContacts = getContacts;
const getUsers = async (req, res) => {
    try {
        let usersData = await auth_model_1.default.find({}, { password: 0, __v: 0 });
        const adminData = req.user;
        usersData = usersData.filter((value) => adminData.email !== value.email);
        return res.status(http_status_codes_1.StatusCodes.OK).json({ users: usersData });
    }
    catch (err) {
        console.log(err);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" });
    }
};
exports.getUsers = getUsers;
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the Userid in the Path Parameter to delete the User" });
        }
        const adminID = String(req.user._id);
        const userwithAdmin = await auth_model_1.default.findOne({ _id: id });
        if (adminID === id || userwithAdmin?.isAdmin) {
            return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ msg: "You cannot Delete Admin" });
        }
        const deleteUser = await auth_model_1.default.deleteOne({ _id: id });
        if (deleteUser.deletedCount === 0) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: `User with id:${id} Not found in the Server` });
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "Invalid User ID" });
            }
        }
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" });
    }
};
exports.deleteUser = deleteUser;
const getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the Userid in the Path Parameter to Get the User" });
        }
        const userData = await auth_model_1.default.findOne({ _id: id }, { password: 0, __v: 0 });
        if (!userData) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: `User with id:${id} Not found in the Server` });
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({ user: userData });
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "Invalid User ID" });
            }
        }
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" });
    }
};
exports.getUserByID = getUserByID;
const deleteContactByID = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the ContactID in the Path Parameter to Get the Contacts" });
        }
        const deleteContact = await contact_model_1.default.deleteOne({ _id: id });
        if (deleteContact.deletedCount === 0) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: `Contact with id:${id} Not found in the Server` });
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Contact deleted successfully" });
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "Invalid Contact ID" });
            }
        }
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" });
    }
};
exports.deleteContactByID = deleteContactByID;
const updateUserById = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const updateuser = await auth_model_1.default.updateOne({ _id: id }, { $set: body });
        if (updateuser.matchedCount === 0) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: `User with id:${id} Not found in the Server` });
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "User Updated Successfully" });
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "Invalid User ID" });
            }
        }
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" });
    }
};
exports.updateUserById = updateUserById;
const getServices = async (req, res) => {
    try {
        const servicesData = await services_models_1.default.find({});
        return res.status(http_status_codes_1.StatusCodes.OK).json({ services: servicesData });
    }
    catch (err) {
        console.log(err);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in our Backend Servers." });
    }
};
exports.getServices = getServices;
const deleteServiceById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: "Pass the Serviceid in the Path Parameter to Get the Services" });
        }
        const deleteService = await services_models_1.default.deleteOne({ _id: id });
        if (deleteService.deletedCount === 0) {
            return res.status(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE).json({ msg: `Service with id:${id} Not found in the Server` });
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Service deleted successfully" });
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            if (error.name === "CastError") {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ msg: "Invalid Service ID" });
            }
        }
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error in Our Backend Server" });
    }
};
exports.deleteServiceById = deleteServiceById;
