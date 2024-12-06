import express, { Application, Response, Request, NextFunction } from "express"
import { ErrorHandler } from "./middlewares/ErrorHandler"
import dotenv from "dotenv"
import config from "../config/config"
import { dbConnection } from "./dbConnection"
import { NotFoundError } from "./utils/ApiError"
import expressApp from "./express"
const app: Application = express()

dotenv.config()

expressApp(app)

app.use((req: Request) => {
    throw new NotFoundError(req.path)
})

app.use(ErrorHandler.handle)

app.listen(config.port,  () => {
    console.log(`Server running on Port ${config.port}`)
})
dbConnection()
