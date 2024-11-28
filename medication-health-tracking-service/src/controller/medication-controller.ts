import {Request, Response, NextFunction } from "express";
import { createChannel, subscribeMessage } from "../utils/index";
import MedicalRecordService from "../services/medication-services";

import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

const service = new MedicalRecordService()

export const createUserMedication = async(req: any, res: Response, next: NextFunction) => {
    // const channel =  await createChannel()
    // subscribeMessage(channel, service)

    try {
        
  
    const {user_id} = req.user

    const {name, patient_id, dosage, startDate, endDate } = req.body

    const newMedication = service.createMedication({name, patient_id, dosage, startDate, endDate })
    res.status(StatusCodes.OK).json({
        data: newMedication,
        message: "record created",
        success: true
    })
} catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")


}


}


export const getUserMedications = async(req: any, res: Response, next: NextFunction) => {
    try {
        
  
        // const {user_id} = req.user
    
        const records = await service.getMedications()
        res.status(StatusCodes.OK).json({
            data: records,
            message: "record fetched",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")
    
    
    }
}

export const getUserMedication = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
    
        const record = service.getMedication({id})
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record created",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const delUserMedication = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
        await service.delMedication({id})
        res.status(StatusCodes.OK).json({
      
            message: "record deleted",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const updateMedication = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params   
        const {name, patient_id, dosage, startDate, endDate   } = req.body
     
    
        const record = service.updateMedication({id ,name, patient_id, dosage, startDate, endDate  })
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record created",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}