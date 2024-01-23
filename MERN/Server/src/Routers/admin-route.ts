import { Router } from "express";
import authMiddleware from "../Middleware/auth-middleware";
import { deleteUser, getContacts, getUsers } from "../Controllers/admin-controller";

const adminRouter: Router = Router()

adminRouter.use(authMiddleware)

adminRouter.get("/contacts", getContacts)
adminRouter.get("/users", getUsers)
adminRouter.delete("/user/:id/delete", deleteUser)

export default adminRouter