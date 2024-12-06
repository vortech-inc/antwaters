import {Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const createAvailability = async(req: Request, res: Response, next: NextFunction) => {

    try {


        res.status(StatusCodes.OK).json({
            success: true,
            message: "availabilty created"
        })
        
    } catch (error) {
        next(error)
        
    }
}

export const  updateAvailability = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
        res.status(StatusCodes.OK).json({
            success: true,
            message: "availabilty updated"
        })
    } catch (error) {
        next(error)
        
    }

}