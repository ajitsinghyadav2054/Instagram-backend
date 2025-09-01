import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        type: String,  //We're storing the url of the image for performance reasons
        required: true
    },
    caption: {
        type: String,
        default: ""
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",  //An array of user IDs who liked the post
        default: []
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
        default: []
    }
}, { timestamps: true });


const Post = mongoose.model("Post", postSchema);
export default Post;