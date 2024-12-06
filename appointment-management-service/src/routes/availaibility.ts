import express from "express"
import { createAvailability, updateAvailability } from "../controller/availability"
const availaibilityRouter = express.Router()

availaibilityRouter.patch("/", updateAvailability)
availaibilityRouter.post("/", createAvailability)


export default availaibilityRouter