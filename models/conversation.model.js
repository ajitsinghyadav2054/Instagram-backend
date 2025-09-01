import mongoose from "mongoose";

//Why do we need a conversation model, since we already have messages model? 
//Reason: To group messages between users
const conversationSchema = new mongoose.Schema({
    participants: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        required: true
    },
    messages: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Message",
        required: true
    }
}, { timestamps: true });


const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;