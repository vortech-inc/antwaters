import express from "express"
import { createUserAppointment, delUserAppointment, getMeAppointments, getUserAppointment, getUserAppointments, updateUserAppointment } from "../controller/appointments-controller"
import { authenticateUser } from "../middlewares/authentication"
const appointmenntRouter = express.Router()

appointmenntRouter.post("/", authenticateUser, createUserAppointment)
appointmenntRouter.get("/", authenticateUser, getMeAppointments)
appointmenntRouter.get("/:id", authenticateUser, getUserAppointment)

appointmenntRouter.get("/user/:id", authenticateUser, getUserAppointments)
appointmenntRouter.patch("/:id",  authenticateUser, updateUserAppointment)
appointmenntRouter.delete("/:id", authenticateUser, delUserAppointment)


export default appointmenntRouter