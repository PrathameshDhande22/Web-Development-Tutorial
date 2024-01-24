"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    email: { type: "String", required: true },
    username: { type: "String", required: true },
    message: { type: "String", required: true }
});
const contactModel = (0, mongoose_1.model)("Contact", contactSchema);
exports.default = contactModel;
