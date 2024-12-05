import mongoose from "mongoose";

const messageShema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required:  true
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required:  true
    },
    content: {
        type: String,
        required: true
    },
    is_encrypted: {
        type: String,
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
    }
)


export const Message = mongoose.model("Message", messageShema)