import Job from "./../models/Job.js"

const postApiJob = async (req, res) => {
    const {user, fullname, imageurl, address, addarno, jobcategory, gender } = req.body;

    const job = new Job({
        user,
        fullname,
        imageurl,
        address,
        addarno,
        jobcategory,
        gender
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

const getApiJob = async (req, res) => {
    const alltransaction = await Job.find();
   return res.status(200).json({
        success: true,
        data: alltransaction,
        message: "successfull User all Job fatched "
    })
}

const getApiUserJob = async (req, res) => {
    const { id} = req.params;
   try{
    const order1 = await Job.find({user:{ _id: id }}).populate("user")
  
    res.json({
      success:true,
      data:order1,
      message: "user Job fatch  successfully"
    });
   }
   catch(e){
    res.json({
        success:false,
        message: e.message
      });
   }
  }



export {postApiJob, getApiJob, getApiUserJob, deleteApiJobById, }