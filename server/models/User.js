import { model, Schema } from "mongoose";
const userschema=new Schema({
    first_name:{
        type:"String",
        required:true,

    },
    last_name:{
        type:"String",
        required:true,
    },
    email:{
        type:"string",
        required:true,
        unique: true,
    },
    phone_no:{
        type:"Number",
        required:true,
        unique: true,

    },
    address:{
        type:"String",
        default: "-",
        
    },
    password:{
        type:"String",
        required:true,
    },


},
{
    timestamps:true,
})
const User=model("User", userschema)
export default User;