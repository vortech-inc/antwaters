import {Request, Response, NextFunction } from "express";
import MessageService from "../services/message-service";

import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

const service = new MessageService()

export const createUserMessage = async(req: any, res: Response, next: NextFunction) => {


    try {        
  
    const {sender_id, receiver_id, content } = req.body

    const newMessage = service.createMessage({sender_id, receiver_id, content })
    res.status(StatusCodes.OK).json({
        data: newMessage,
        message: "message created",
        success: true
    })
} catch (error) {
    next(error)

    

}


}


export const getUserMessages = async(req: any, res: Response, next: NextFunction) => {
    try {
        
  
        const {sender_id, recipient_id} = req.body
    
        const messages = await service.getMessages({sender_id, recipient_id})
        res.status(StatusCodes.OK).json({
            data: messages,
            message: "record fetched",
            success: true
        })
    } catch (error) {

        next(error)
    
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