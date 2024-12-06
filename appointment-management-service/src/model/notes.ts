import mongoose from "mongoose";

const appointmentNoteSchema = new mongoose.Schema({

    appointment_id: {
        type: mongoose.Types.ObjectId,
         ref: 'Appointment',
        required: true
    },
    content: {
            type: String,

        } ,
    
 
 
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

export const AppointmentNote = mongoose.model("AppointmentNote", appointmentNoteSchema)