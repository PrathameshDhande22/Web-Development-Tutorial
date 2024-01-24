"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema = new mongoose_1.Schema({
    username: { type: "string", required: true },
    password: { type: "string", required: true },
    email: { type: "string", required: true },
    isAdmin: { type: "boolean", default: false, required: true }
});
userSchema.pre("save", async function () {
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashPassword = await bcryptjs_1.default.hash(this.password, salt);
    this.password = hashPassword;
});
userSchema.methods.generateToken = function () {
    try {
        const key = String(process.env.SECRET_KEY);
        return jsonwebtoken_1.default.sign({ email: this.email, id: this._id.toString() }, key, { algorithm: "HS256", expiresIn: "20d" });
    }
    catch (error) {
        console.log(error);
    }
    return "";
};
userSchema.methods.comparePassword = async function (password) {
    return bcryptjs_1.default.compare(password, this.password);
};
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
