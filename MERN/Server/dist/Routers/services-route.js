"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_controller_1 = require("../Controllers/services-controller");
const ServiceRouter = (0, express_1.Router)();
ServiceRouter.get("/services", services_controller_1.services);
exports.default = ServiceRouter;
