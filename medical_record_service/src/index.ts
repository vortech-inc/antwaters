import express, { Application, Response, Request, NextFunction } from "express"
import config from "../config/config"
import { dbConnection } from "./dbConnection/index"
import expressApp from "./express"
const {port } = config

const app = express()

expressApp(app)


app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})


dbConnection()
console.log("first")