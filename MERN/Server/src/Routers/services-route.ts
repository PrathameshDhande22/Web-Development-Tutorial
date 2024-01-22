import { Router } from "express";
import { services } from "../Controllers/services-controller";

const ServiceRouter: Router = Router()

ServiceRouter.get("/services", services)

export default ServiceRouter

