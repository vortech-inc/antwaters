import {Request, Response, NextFunction } from "express";
import { createChannel, subscribeMessage } from "../utils/index";
import MedicalRecordService from "../services/medical-record-services";

import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

const service = new MedicalRecordService()

export const createRecord = async(req: any, res: Response, next: NextFunction) => {
    // const channel =  await createChannel()
    // subscribeMessage(channel, service)

    try {
        
  
    const {user_id} = req.user

    const {recordType, data, status, body } = req.body

    const newRecords = service.createMedicalRecord({recordType, data, status, body, patient_id: user_id })
    res.status(StatusCodes.OK).json({
        data: newRecords,
        message: "record created",
        success: true
    })
} catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")


}


}


export const getRecords = async(req: any, res: Response, next: NextFunction) => {
    try {
        
  
        // const {user_id} = req.user
    
        const records = await service.getMedicalRecords()
        res.status(StatusCodes.OK).json({
            data: records,
            message: "record fetched",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")
    
    
    }
}

export const getRecord = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
    
        const record = service.getMedicalRecord({id})
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record created",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const delRecord = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
        await service.delMedicalRecord({id})
        res.status(StatusCodes.OK).json({
      
            message: "record deleted",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const updateRecord = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params   
        const {user_id} = req.user
        const {recordType, data, status, body, patient_id } = req.body
     
    
        const record = service.updateMedicalRecords({id, recordType, data, status, body, patient_id:  patient_id ?? user_id})
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record created",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}