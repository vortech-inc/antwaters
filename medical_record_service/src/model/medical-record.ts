import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
 
    recordType: {
        type: String,
        required: true
    },
    patient_id: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], // Specify allowed values here.
        required: true
    },
    data: {
        type: Object,       
        required: true
    }
 
},
{
    timestamps: true, 
})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)