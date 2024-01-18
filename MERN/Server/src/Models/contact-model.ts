import { Schema, model } from "mongoose";
import { ContactInterface } from "../models";

const contactSchema = new Schema<ContactInterface>({
    email: { type: "String", required: true },
    username: { type: "String", required: true },
    message: { type: "String", required: true }
})

const contactModel = model<ContactInterface>("Contact", contactSchema)

export default contactModel;