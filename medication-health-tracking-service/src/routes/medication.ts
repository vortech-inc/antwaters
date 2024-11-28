import express from "express"
import {  createUserMedication,  delUserMedication, getUserMedication, getUserMedications, updateMedication } from "../controller/medical_records"
const medicalRecordRouter = express.Router()

medicalRecordRouter.post("/", createUserMedication)
medicalRecordRouter.get("/:id", getUserMedication)
medicalRecordRouter.get("/", getUserMedications)
medicalRecordRouter.patch("/:id", delUserMedication)
medicalRecordRouter.delete("/:id", updateMedication)


export default medicalRecordRouter