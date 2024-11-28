import express, { Application } from "express"
import appointmenntRouter from "./routes/appointment"


const expressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use("/", appointmenntRouter)


}
export  default expressApp