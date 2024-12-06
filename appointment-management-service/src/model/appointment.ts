import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    patient_id: {
        type: mongoose.Types.ObjectId,
         ref: 'User',
        required: true
    },
    provider_id: {
        type: mongoose.Types.ObjectId,
         ref: 'User',
        required: true
    },

    note: [{
        content: {
            type: String,

        }

    }],
    status: {
        type: String,    
        enum: ["scheduled", "rescheduled", "cancelled", "completed"],
        required: true
    }
    ,
    dateTime: {
        type: Date,       
        required: true
    },
 
 
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

export const Appointment = mongoose.model("Appointment", appointmentSchema)