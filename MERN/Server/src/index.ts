import { configDotenv } from "dotenv"
import express, { Request, Response, Express } from "express"
import { StatusCodes } from "http-status-codes"
import { Message } from "./models"
import connectDB from "./Utils/db"
import errorHandler from "errorhandler"
import authRouter from "./Routers/auth-route"
configDotenv()

const app: Express = express()

app.use(errorHandler())
app.use(express.json())


app.use("/api/auth", authRouter)
app.get("/", (req: Request, res: Response<Message>) => {
    return res.status(StatusCodes.OK).json({ msg: "The API is Working" })
})

const PORT = process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Listen on ${PORT} click on http://localhost:${PORT}`)
    })
})

