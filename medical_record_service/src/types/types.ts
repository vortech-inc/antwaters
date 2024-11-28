import { Document, Types } from "mongoose";

export interface UserPayload {
    _id: {}
    id?: string;
    email: string;
    role: string;
    password: string,
    createdAt: NativeDate,
    refreshToken: string
}

export interface UserIdProps {
    id: string,
    email?: string
}


export interface IMedicalRecord extends Document {
    recordType: string;
    patient_id: string;
    body: string;
    status: 'pending' | 'approved' | 'rejected';
    data: Record<string, any>; 
}