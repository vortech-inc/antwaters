import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({

    patient_id: {
        type: mongoose.Types.ObjectId,
         ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    frequency: {
        type: Object,       
        required: true
    }
    ,
    startDate: {
        type: Date,       
        required: true
    },
    endDate: {
        type: Date,       
        required: true
    }
 
 
},
{
    timestamps: true, 
    toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  }
})

export const Medication = mongoose.model("Medication", medicationSchema)