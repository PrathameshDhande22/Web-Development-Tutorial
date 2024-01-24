import { Router } from "express";
import authMiddleware from "../Middleware/auth-middleware";
import { deleteContactByID, deleteServiceById, deleteUser, getContacts, getServices, getUserByID, getUsers, updateUserById } from "../Controllers/admin-controller";
import adminMiddleware from "../Middleware/admin-middleware";

const adminRouter: Router = Router()

adminRouter.use(authMiddleware, adminMiddleware)

adminRouter.get("/contacts", getContacts)
adminRouter.get("/users", getUsers)
adminRouter.delete("/user/:id/delete", deleteUser)
adminRouter.get("/user/:id", getUserByID)
adminRouter.delete("/contact/:id/delete", deleteContactByID)
adminRouter.patch("/user/:id/update", updateUserById)
adminRouter.get("/services", getServices)
adminRouter.delete("/service/:id/delete", deleteServiceById)

export default adminRouter