import {Request, Response, NextFunction } from "express";
import { createChannel, subscribeMessage } from "../utils/index";
import AppointmentService from "../services/appointment-service";

import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/ApiError";

const service = new AppointmentService()

export const createUserAppointment = async(req: any, res: Response, next: NextFunction) => {


    try {        
    const {id} = req.user

    if(!id){
      throw  new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong" )

    }

    const {provider_id, patient_id, dateTime, note, status } = req.body

    const newAppointment = await service.createAppointment({provider_id, patient_id: id, dateTime, note, status })
    console.log(newAppointment)
    res.status(StatusCodes.OK).json({
        data: newAppointment,
        message: "record created",
        success: true
    })
} catch (error) {

    next(error)



}


}


export const getUserAppointments = async(req: any, res: Response, next: NextFunction) => {
    try {
        
        const {id} = req.params
    
        const records = await service.getAppointments({id })
        res.status(StatusCodes.OK).json({
            data: records,
            message: "record fetched",
            success: true
        })
    } catch (error) {
        next(error)
    
    
    }
}
export const getMeAppointments = async(req: any, res: Response, next: NextFunction) => {
    try {
        const {id} = req.user
    
        const records = await service.getAppointments({id })
        res.status(StatusCodes.OK).json({
            data: records,
            message: "record fetched",
            success: true
        })
    } catch (error) {

        next(error)
    
    }
}

export const getUserAppointment = async(req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new ApiError(StatusCodes.FORBIDDEN, "No user ")
    }
    try {        
        
        const {id}  = req.params     
        const record = await service.getAppointment({id})
        res.status(StatusCodes.OK).json({
            data: record,
            message: "appointment record created",
            success: true
        })
    } catch (error) {
            // throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to fetch record")
            throw error
    
    
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
     
    
        const record = await service.updateAppointment({id, provider_id, patient_id, dateTime, note, status })
        console.log( record)

        res.status(StatusCodes.OK).json({
            data: record,
            message: "record updated",
            success: true
        })
    } catch (error) {  
    
        next(error)
    }
}