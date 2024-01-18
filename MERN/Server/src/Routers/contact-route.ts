import { Router } from "express";
import validateMiddleware from "../Middleware/validate-middleware";
import contactZodValidator from "../Validator/contact-validator";
import { sendContactInformation } from "../Controllers/contact-controller";

const contactRouter: Router = Router()

contactRouter.post("/contact", validateMiddleware(contactZodValidator), sendContactInformation)

export default contactRouter