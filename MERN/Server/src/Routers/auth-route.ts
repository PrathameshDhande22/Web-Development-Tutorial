import { Router } from "express";
import { register, login } from "../Controllers/auth-contoller";
import validateMiddleware from "../Middleware/validate-middleware";
import { loginSchema, registerSchema } from "../Validator/auth-validator";

const authRouter: Router = Router({});

authRouter.post("/register", validateMiddleware(registerSchema), register)
authRouter.post("/login", validateMiddleware(loginSchema), login)

export default authRouter;