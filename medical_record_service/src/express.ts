import { Channel } from "amqplib"
import express, { Application, Response, Request, NextFunction } from "express"


const expressApp = (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))


}
export  default expressApp