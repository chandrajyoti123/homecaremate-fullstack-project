import { model,Schema } from "mongoose";
const serviceschema=new Schema({
    service_name:{
        type:"String",
        required:true,
        enum : ["home maid","baby sitter","nanny/japa","home cook","patient/elderly caretaker","home nurse"],

    },
    service_img:{
        type:"String",
        required:true,
        unique:true
        
    },
    service_sallary:{
        type:"String",
        required:true,
    },
    service_info:{
        type:"String",
        default:"-"
    },
    salary_set:{
        type:"array",
        required:true,

    },
    detailed_info:{
        type:"String",
        required:true,
    }


    
})
const Service=model("Service",serviceschema)
export default Service;