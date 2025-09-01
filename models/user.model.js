import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],  //We use enum when we want to restrict the value to a specific set of options
        default: "other"
    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId],  //An array of ObjectIds
        ref: "User",  //Each ObjectId refers to a User document
        default: []
    },
    following: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: []
    },
    bookmarks: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: []
    }
}, { timestamps: true });  //using timestamps, we can track the creation and update times


const User = mongoose.model("User", userSchema);
export default User;