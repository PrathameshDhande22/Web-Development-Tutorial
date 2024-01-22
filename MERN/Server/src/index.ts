import { configDotenv } from "dotenv"
import express, { Request, Response, Express } from "express"
import { StatusCodes } from "http-status-codes"
import { Message } from "./models"
import connectDB from "./Utils/db"
import authRouter from "./Routers/auth-route"
import errorMiddleware from "./Middleware/error-middleware"
import contactRouter from "./Routers/contact-route"
import cors from "cors"
import ServiceRouter from "./Routers/services-route"
configDotenv()

const app: Express = express()

app.use(cors({ origin: ["http://localhost:4173",String(process.env.URL)], methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }))
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api", contactRouter)
app.use("/api", ServiceRouter)

app.get("/", (req: Request, res: Response<Message>) => {
    return res.status(StatusCodes.OK).json({ msg: "The API is Working" })
})

app.use(errorMiddleware)

const PORT: string = String(process.env.PORT)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Listen on ${PORT} click on http://localhost:${PORT}`)
    })
})


