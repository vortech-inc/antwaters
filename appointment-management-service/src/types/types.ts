import { Document, ObjectId } from "mongoose";


export interface UserIdProps {
    id: string,
    email?: string
}


export interface IAppointment {
    provider_id: string;
    patient_id:  string 
    dateTime: Date;
    note: {content?: string}
    status: "scheduled"| "rescheduled" | "cancelled" | "completed",

}