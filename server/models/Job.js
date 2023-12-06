import { Schema, model } from "mongoose";

const jobSchema = new Schema({
    
    user:{
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    first_name : {
        type :'String',
        required : true,
    },
    last_name : {
        type :'String',
        required : true,
    },
    phoneno : {
        type :"Number",
        required : true,
        
    },
    email : {
        type :"String",
        required : true,
        
    },
   image : {
        type :'String',
        required : true,
    },
    address : {
        type :'String',
        required : true,
    },
    adharno: {
        type: 'Number',
        required: true,
    },
   
    gender : {
        type : 'String',
        enum: ['male', 'female','other'],
        require: true
    },
    age:{
        type:"Number",
        required:true
    },
    jobcategory : {
        type : 'String',
        enum : ["home maid","baby sitter","nanny/japa","home cook","patient/elderly caretaker","home nurse"],
        required : true,
    },
    shift:{
        type:"String",
        enum :["day shift","night shift","live in"],
        required:true
    },
    expecting_salary:{
        type:"Number",
        
    }
   
    
},
{
    timestamps: true,
}

);

const Job = model('Job', jobSchema);


export default Job ;