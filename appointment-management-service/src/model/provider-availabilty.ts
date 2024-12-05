import mongoose from "mongoose";

const availaibilitySchema = new mongoose.Schema({

    provider_id: {
        type: mongoose.Types.ObjectId,
         ref: 'User',
        required: true
    },

    isBlocked: {
        type: Boolean,    
        default: false,
        required: true
    }
    ,
    availableFrom: {
        type: Date,       
        required: true
    },
    availableTo: {
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

export const Availability = mongoose.model("Availability", availaibilitySchema)