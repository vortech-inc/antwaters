import express from "express"
import { createRecord, delRecord, getRecord, getRecords, updateRecord } from "../controller/medical_records"
const medicalRecordRouter = express.Router()

medicalRecordRouter.post("/", createRecord)
medicalRecordRouter.get("/:id", getRecord)
medicalRecordRouter.get("/", getRecords)
medicalRecordRouter.patch("/:id", delRecord)
medicalRecordRouter.delete("/:id", updateRecord)


export default medicalRecordRouter