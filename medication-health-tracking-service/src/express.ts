import { Channel } from "amqplib"
import express, { Application } from "express"
import medicalRecordRouter from "./routes/medication"


const expressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use("/", medicalRecordRouter)


}
export  default expressApp