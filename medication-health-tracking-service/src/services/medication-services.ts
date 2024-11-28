import { Medication } from "../model/medication"
import { IMedication } from "../types/types";
import { ApiError } from "../utils/ApiError"
import { StatusCodes } from "http-status-codes";

interface upDateProps extends IMedication{
    id: string
}
class MedicationService {
   getMedication = async ({id}: {id: string}) => {


    try {
        const medication =  await Medication.findById(id)
        if(!medication){
            throw new ApiError(StatusCodes.NOT_FOUND, "Medication not found");

        }
        return medication

        
    } catch (error) {
        throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to get record")

    }

    }

    createMedication = async ({name, patient_id, dosage, startDate, endDate }: IMedication )  => {

        try {

            const newMedication = await  Medication.create({name, patient_id, dosage, startDate, endDate }) 
               return newMedication 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }

    getMedications = async ()   => {

        try {

            const medications = await Medication.find() 
               return medications 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
    
    delMedication = async ({id}:{id: string}) : Promise<void>  => {

        try {

             await Medication.findByIdAndDelete(id) 
          

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to delete")
            
        }


    }
    
    updateMedication = async ({id ,name, patient_id, dosage, startDate, endDate  }: upDateProps)   => {

        try {

            const newRecord = await Medication.findByIdAndUpdate({id}, {name, patient_id, dosage, startDate, endDate } ) 
               return newRecord 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
}

export default MedicationService