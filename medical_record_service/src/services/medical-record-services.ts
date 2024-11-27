import { MedicalRecord } from "../model/medical-record"
import { IMedicalRecord } from "../types/types"
import { ApiError } from "../utils/ApiError"
import { StatusCodes } from "http-status-codes";

interface medicalRecrdProp {
    id?: string,
    recordType: string, 
    data: Record<string, any>,
    status: "pending" | "approved" | "rejected",
    body: string, 
    patient_id: string
}

class MedicalRecordService {
   getMedicalRecord = async ({id}: {id: string}): Promise<IMedicalRecord> => {


    try {
        const record =  await MedicalRecord.findById(id)
        if(!record){
            throw new ApiError(StatusCodes.NOT_FOUND, "Medical record not found");

        }
        return record as IMedicalRecord

        
    } catch (error) {
        throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to get record")

    }

    }

    createMedicalRecord = async ({recordType, data, status, body, patient_id }: medicalRecrdProp ): Promise<IMedicalRecord>  => {

        try {

            const newRecord = await  MedicalRecord.create({recordType, data, status, body, patient_id }) 
               return newRecord 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }

    getMedicalRecords = async () : Promise<IMedicalRecord[]>  => {

        try {

            const newRecord = await MedicalRecord.find() 
               return newRecord 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
    
    delMedicalRecord = async ({id}:{id: string}) : Promise<void>  => {

        try {

             await MedicalRecord.findByIdAndDelete(id) 
          

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to delete")
            
        }


    }
    
    updateMedicalRecords = async ({id, recordType, data, status, body, patient_id }: medicalRecrdProp) : Promise<IMedicalRecord[]>  => {

        try {

            const newRecord = await MedicalRecord.find() 
               return newRecord 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
}

export default MedicalRecordService