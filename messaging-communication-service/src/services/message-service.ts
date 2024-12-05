import { Message } from "../models/message";
import {  IMessage } from "../types/types";
import { ApiError } from "../utils/ApiError"
import { StatusCodes } from "http-status-codes";

interface updateProps extends IMessage{
    id: string
}
class MessageService {
   getMessage = async ({id}: {id: string}) => {


    try {
        const message =  await Message.findById(id)
        if(!message){
            throw new ApiError(StatusCodes.NOT_FOUND, "Message not found");

        }
        return message

        
    } catch (error) {
        throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to get message")

    }

    }

    createMessage = async ({sender_id, receiver_id, content }: IMessage )  => {

        try {

            const newMessage = await  Message.create({sender_id, receiver_id, content }) 
               return newMessage 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to create appointment")
            
        }


    }

    getMessages = async ()   => {

        try {

            const messages = await Message.find() 
               return messages 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "hhey")
            
        }


    }
    
    delMessage = async ({id}:{id: string}) : Promise<void>  => {

        try {

             await Message.findByIdAndDelete(id) 
          

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to delete")
            
        }

    }
    
    updateMessage = async ({id , content }: updateProps)   => {

        try {

            const updatedMessage = await Message.findByIdAndUpdate({id}, {content } ) 
               return updatedMessage 

        } catch (error) {
            console.error(error)
            throw new  ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "failed to perofrm operation")
            
        }


    }
}

export default MessageService