import express from "express"
import {  createUserMessage, delUserMessage, getUserMessage, getUserMessages, updateUserMessage } from "../controller/messages-controller"
const messageRouter = express.Router()

messageRouter.post("/", createUserMessage)
messageRouter.get("/:id", getUserMessage)
messageRouter.get("/", getUserMessages)
messageRouter.patch("/:id", updateUserMessage)
messageRouter.delete("/:id", delUserMessage)


export default messageRouter