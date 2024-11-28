import {Request, Response, NextFunction } from "express";
import { createChannel, subscribeMessage } from "../utils/index";
import MedicalRecordService from "../services/appointment-service";

import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

const service = new MedicalRecordService()

export const createUserAppointment = async(req: any, res: Response, next: NextFunction) => {


    try {
        
  
    const {user_id} = req.user

    const {provider_id, patient_id, dateTime, note, status } = req.body

    const newAppointment = service.createAppointment({provider_id, patient_id, dateTime, note, status })
    res.status(StatusCodes.OK).json({
        data: newAppointment,
        message: "record created",
        success: true
    })
} catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")


}


}


export const getUserAppointments = async(req: any, res: Response, next: NextFunction) => {
    try {
        
  
        // const {user_id} = req.user
    
        const records = await service.getAppointments()
        res.status(StatusCodes.OK).json({
            data: records,
            message: "record fetched",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")
    
    
    }
}

export const getUserAppointment = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
    
        const record = service.getAppointment({id})
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record created",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const delUserAppointment = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
        await service.delAppointment({id})
        res.status(StatusCodes.OK).json({
      
            message: "record deleted",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const updateUserAppointment = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params   
        const {provider_id, patient_id, dateTime, note, status } = req.body
     
    
        const record = service.updateAppointment({id, provider_id, patient_id, dateTime, note, status })
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record updated",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to update record")
    
    
    }
}