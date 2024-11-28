import { Document, ObjectId } from "mongoose";


export interface UserIdProps {
    id: string,
    email?: string
}


export interface IMedication {
    name: string;
    patient_id:  string 
    dosage: string;
    startDate: Date
    endDate: Date; 
}