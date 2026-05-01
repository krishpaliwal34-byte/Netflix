import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
        require: true,
        unique: true,
    },
    password:{
        type:String,
    }
})
const User = mongoose.model("User" , loginSchema)
export default User;