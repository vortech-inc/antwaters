import { Document, ObjectId } from "mongoose";


export interface UserIdProps {
    id: string,
    email?: string
}


export interface IMessage {
    sender_id?: string;
    receiver_id?:  string 
    content: string;
  
}