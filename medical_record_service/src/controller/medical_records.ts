import {Request, Response, NextFunction } from "express";
import { createChannel, subscribeMessage } from "../utils/index";
import MedicalRecordService from "../services/medical-record-services";


const service = MedicalRecordService

const createRecord = async(req: Request, res: Response, next: NextFunction) => {
    const channel =  await createChannel()
    subscribeMessage(channel, service)

    const {recordType} = req.body



}