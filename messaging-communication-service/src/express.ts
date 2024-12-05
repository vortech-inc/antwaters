import { Channel } from "amqplib"
import express, { Application, Response, Request, NextFunction } from "express"
import { createChannel } from "./utils/index"
import userRouter from "./routes/message"



const expressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    
    app.use("/", userRouter)
}

export  default expressApp