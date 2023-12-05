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



export {postApiJob, getApiJob, getApiUserJob, deleteApiJobById, }