import {Request, Response, NextFunction } from "express";
import MedicalRecordService from "../services/message-service";

import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

const service = new MedicalRecordService()

export const createUserMessage = async(req: any, res: Response, next: NextFunction) => {


    try {        
  
    // const {user_id} = req.user

    const {sender_id, receiver_id, content } = req.body

    const newAppointment = service.createMessage({sender_id, receiver_id, content })
    res.status(StatusCodes.OK).json({
        data: newAppointment,
        message: "message created",
        success: true
    })
} catch (error) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")


}


}


export const getUserMessages = async(req: any, res: Response, next: NextFunction) => {
    try {
        
  
        // const {user_id} = req.user
    
        const messages = await service.getMessages()
        res.status(StatusCodes.OK).json({
            data: messages,
            message: "record fetched",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch records")
    
    
    }
}

export const getUserMessage = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
    
        const record = service.getMessage({id})
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record created",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch message")
    
    
    }
}

export const delUserMessage = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params        
        await service.delMessage({id})
        res.status(StatusCodes.OK).json({
      
            message: "record deleted",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
    
    
    }
}

export const updateUserMessage = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params   
        const {content } = req.body
     
    
        const record = service.updateMessage({id, content })
        res.status(StatusCodes.OK).json({
            data: record,
            message: "record updated",
            success: true
        })
    } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to update record")
    
    
    }
}