import { Router } from "express";
import { register, login, users } from "../Controllers/auth-contoller";
import validateMiddleware from "../Middleware/validate-middleware";
import { loginSchema, registerSchema } from "../Validator/auth-validator";
import authMiddleware from "../Middleware/auth-middleware";

const authRouter: Router = Router({});

authRouter.post("/register", validateMiddleware(registerSchema), register)
authRouter.post("/login", validateMiddleware(loginSchema), login)
authRouter.get("/users", authMiddleware, users)

export default authRouter;