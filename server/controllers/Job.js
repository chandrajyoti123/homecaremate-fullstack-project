import Job from "./../models/Job.js"

const postApiJob = async (req, res) => {

    const {user, fullname, imageurl, address, addarno, jobcategory, gender, mobileno } = req.body;

    const job = new Job({
        user,
        fullname,
        imageurl,
        address,
        addarno,
        jobcategory,
        gender,
        mobileno

    const {user,first_name, last_name,phoneno,email,image,address,adharno, gender,age,jobcategory,shift,expecting_salary } = req.body;

    const job = new Job({
       user,first_name,last_name,phoneno,email,image,address,adharno,gender,age,jobcategory,shift,expecting_salary

    })

    try {
        const savedata = await job.save();
        res.status(201).json({
            success: true,
            data: savedata,
            message: "Your Job Posted Successfull "
        })
    } catch (e) {
       return res.json({
            success: false,
            message: e.message
        })
    }
}


const getapijob=async(req,res)=>{
  const alljobs=await Job.find().populate("user")
  return res.json({
    success:true,
    data:alljobs,
    message:"all jobs fetched successfulyy"
  })

}
// const getApiJob = async (req, res) => {
//     const alljobs = await Job.find().populate("user");
//    return res.status(200).json({
//         success: true,
//         data: alljobs,
//         message: "all jobs data fetched successfully"
//     })
// }

// const getApiUserJob = async (req, res) => {
//     const { id} = req.params;
//    try{
//     const order1 = await Job.find({user:{ _id: id }}).populate("user")
  
//     res.json({
//       success:true,
//       data:order1,
//       message: "user Job fatch  successfully"
//     });
//    }
//    catch(e){
//     res.json({
//         success:false,
//         message: e.message
//       });
//    }
//   }

// const deleteApiJobById = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       await Job.deleteOne({ _id: id });
//       res.status(200).json({
//         success: true,
//         message: " deleted successfully",
//       });
//     } catch (err) {
//       res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };


export {postApiJob, getapijob }