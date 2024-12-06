import { Appointment } from "../model/appointment"
import { IAppointment } from "../types/types";
import { ApiError } from "../utils/ApiError"
import { StatusCodes } from "http-status-codes";

interface updateProps extends IAppointment{
    id: string,
    note_id?: string
}
class AppointmentService {
   getAppointment = async ({id}: {id: string}) => {


    try {
        const appointment =  await Appointment.findById(id)
        if(!appointment){
            throw new ApiError(StatusCodes.NOT_FOUND, "Appointment not found");

        }
        return appointment

        
    } catch (error) {
        if(error instanceof ApiError){
            throw error
        }
        throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error instanceof Error ? error.message : "something went wrong")

    }

    }

    createAppointment = async ({provider_id, patient_id, dateTime, note, status }: IAppointment )  => {

        try {

            const newAppointment = await  Appointment.create({ provider_id, patient_id, dateTime, note, status }) 
               return newAppointment 

        } catch (error) {

            if(error instanceof ApiError){
                throw error
            }
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error instanceof Error ? error.message : "Something went wrong" )
                    
        }


    }

    getAppointments = async ({id}: {id: string})   => {

        try {


            const appointments = await Appointment.find({ $or: [{patient_id: id}, {provider_id: id}]}).sort({dateTime: 1})

            return appointments 

        } catch (error) {
            if(error instanceof ApiError){
                throw error
            }
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error instanceof Error ? error.message : "Something went wrong" )
                    
        }


    }
    
    delAppointment = async ({id}:{id: string}) : Promise<void>  => {

        try {

            const deleteRecord =  await Appointment.findByIdAndDelete(id) 
            if(!deleteRecord){
                throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR,  "Could not find record" )

            }
          

        } catch (error) {
            if(error instanceof ApiError){
                throw error
            }
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error instanceof Error ? error.message : "Something went wrong" )
        
            
        }


    }
    
    updateAppointment = async ({id ,provider_id, patient_id, dateTime, note, status }: updateProps)   => {

        try {


            const updatedrecord = await Appointment.findByIdAndUpdate(
                {_id: id}, 
                {provider_id, patient_id, dateTime, note, status },
                {new: true, runValidators: true} 
            ) 
            if(!updatedrecord){
                throw new ApiError(StatusCodes.NOT_FOUND, "Record not found")

            }

               return updatedrecord 

        } catch (error) {
            console.error(error)
            if(error instanceof ApiError){
                throw error
            }
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error instanceof Error ? error.message : "Something went wrong")
            
        }


    }

    addappointmentNote = async ({id, note }: updateProps)   => {

        try {

            const updatedrecord = await Appointment.findByIdAndUpdate(
                {id}, 
                {$push: note } ,
                {new: true}
            ) 

            if(!updatedrecord){
                throw new ApiError(StatusCodes.NOT_FOUND, "No appointment found")
            }
               return updatedrecord 

        } catch (error) {

            if(error instanceof ApiError){
                throw error
            }
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR,  error instanceof Error ? error.message : "something went wrong")
            
        }


    }

    updateAppointmentNote = async ({id, note_id, note }: updateProps)   => {

        try {

            const updatedrecord = await Appointment.findByIdAndUpdate(
                {_id: id, "note.id": note_id}, 
                {$set: {"note.$.content": note} } ,
                {new: true}
            ) 

            if(!updatedrecord){
                throw new ApiError(StatusCodes.NOT_FOUND, "No appointment found")
            }
               return updatedrecord 

        } catch (error) {

            if(error instanceof ApiError){
                throw error
            }
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR,  error instanceof Error ? error.message : "something went wrong")
            
        }


    }
}

export default AppointmentService