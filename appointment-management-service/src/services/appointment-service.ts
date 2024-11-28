import { Appointment } from "../model/appointment"
import { IAppointment } from "../types/types";
import { ApiError } from "../utils/ApiError"
import { StatusCodes } from "http-status-codes";

interface updateProps extends IAppointment{
    id: string
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
        throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to get appointment")

    }

    }

    createAppointment = async ({provider_id, patient_id, dateTime, note, status }: IAppointment )  => {

        try {

            const newAppointment = await  Appointment.create({provider_id, patient_id, dateTime, note, status }) 
               return newAppointment 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to create appointment")
            
        }


    }

    getAppointments = async ()   => {

        try {

            const appointments = await Appointment.find() 
               return appointments 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
    
    delAppointment = async ({id}:{id: string}) : Promise<void>  => {

        try {

             await Appointment.findByIdAndDelete(id) 
          

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to delete")
            
        }


    }
    
    updateAppointment = async ({id ,provider_id, patient_id, dateTime, note, status }: updateProps)   => {

        try {

            const updatedrecord = await Appointment.findByIdAndUpdate({id}, {provider_id, patient_id, dateTime, note, status } ) 
               return updatedrecord 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
}

export default AppointmentService