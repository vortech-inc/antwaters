import express from "express"
import { createUserAppointment, delUserAppointment, getUserAppointment, getUserAppointments, updateUserAppointment } from "../controller/appointments-controller"
const appointmenntRouter = express.Router()

appointmenntRouter.post("/", createUserAppointment)
appointmenntRouter.get("/:id", getUserAppointment)
appointmenntRouter.get("/", getUserAppointments)
appointmenntRouter.patch("/:id", delUserAppointment)
appointmenntRouter.delete("/:id", updateUserAppointment)


export default appointmenntRouter