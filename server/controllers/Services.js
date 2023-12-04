import Service from "../models/Services.js";
const postapiservices=async(req,res)=>{
    const {service_name, service_img,service_sallary,service_info}=req.body;

    const service=new Service({service_name,service_img,service_sallary,service_info})
   try{
    const savedservice= await service.save();
    return res.json({
        success:true,
        data:savedservice,
        message:"service added successfully"
    })
   }catch(err){
    return res.json({
        success:false,
        message:err.message
    })
   }

    
}

const getapiservices=async(req,res)=>{
    const allservices=await Service.find()
    return res.json({
        success:true,
        data:allservices,
        message:"services fetched successfully"
    })

}

const getapioneservices=async(req,res)=>{
    const {_id}=req.params
    const service=await Service.findOne({_id:_id})
    return res.json({
        success:true,
        data:service,
        message:"service fetched successfully"
    })
}

export {postapiservices,getapiservices, getapioneservices}