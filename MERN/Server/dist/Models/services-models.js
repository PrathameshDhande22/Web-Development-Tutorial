"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    description: { type: "string", required: true },
    price: { type: "string", required: true },
    provider: { type: "string", required: true },
    service: { type: "string", required: true },
});
const Service = (0, mongoose_1.model)("service", serviceSchema);
exports.default = Service;
