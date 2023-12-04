import { Schema, model } from "mongoose";

const jobSchema = new Schema({
    
    user:{
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    fullname : {
        type :String,
        required : true,
    },
    imageurl : {
        type :String,
        required : true,
    },
    address : {
        type :String,
        required : true,
    },
    addarno: {
        type: Number,
        required: true,
    },
    jobcategory : {
        type : String,
        enum: ['House Maid', 'Baby Sitters', 'Elder Care', 'Cooks', 'Patient Caretakers', 'Nurse'],
        required : true,
    },
    gender : {
        type : String,
        enum: ['Male', 'Female'],
        require: true
    },
   
    
},
{
    timestamps: true,
}

);

const Job = model('Job', jobSchema);


export default Job ;