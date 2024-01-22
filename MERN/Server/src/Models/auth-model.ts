import { Schema, model } from "mongoose";
import { AuthMethods, AuthModels, UserInterface } from "../models";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const userSchema = new Schema<UserInterface, AuthModels, AuthMethods>({
    username: { type: "string", required: true },
    password: { type: "string", required: true },
    email: { type: "string", required: true },
    isAdmin: { type: "boolean", default: false, required: true }
})

userSchema.pre("save", async function () {
    const salt: string = await bcrypt.genSalt(10)
    const hashPassword: string = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
})

userSchema.methods.generateToken = function (): string {
    try {
        const key: string = String(process.env.SECRET_KEY)
        return jwt.sign({ email: this.email, id: this._id.toString() }, key, { algorithm: "HS256", expiresIn: "20d" })
    } catch (error) {
        console.log(error)
    }
    return ""
}

userSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password)
}

const User = model<UserInterface, AuthModels>("User", userSchema)

export default User;
