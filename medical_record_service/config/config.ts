import dotenv from "dotenv";

dotenv.config()


const config = {
    port: process.env.APPLICATION_PORT,
    secretKey: process.env.SECRETKEY,
    dbUrl:  process.env.MONGODB_URL,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: "ANTWATERS_HEALTH",
    MEDICAL_SERVICE_BINDING_KEY: "MEDICAL_SERVICE",
    COMMUNICATION_SERVICE_BINDING_KEY: "COMMUNICATION_SERVICE",
    QUEUE_NAME: "MEDICAL_RECORD_QUEUE"



}

export default config