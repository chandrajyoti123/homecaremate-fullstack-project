import { model,Schema } from "mongoose";
const reviewschema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        // required:true
    },
    image:{
        type:"String",
        // required:true
    },
    message:{
        type:"String",
        // required:true
    },
    star:{
    type:"Number",
   
    }
})
const Review=model("Review",reviewschema)
export default Review;