import { model,  Schema } from "mongoose";
const orderschema=new Schema({
    shift:{
        type:"String",
        enum :["day shift","night shift","live in"],
        required:true
    },
    country:{
        type:"String",
        required:true,

    },
    state:{
        type:"String",
        required:true

    },
    city:{
        type:"String",
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    userid:{
        type:"String",
        required:true
    },
    serviceid:{
        type:"String",
        required:true
    },
    charges:{
        type:"Number",
        required:true
        
    }

},{
    timestamps:true
})

const Order=model("Order",orderschema)
export default Order;