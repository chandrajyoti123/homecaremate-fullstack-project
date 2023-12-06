import Review from "../models/Review.js";
const postapireview=async(req,res)=>{
    const {user, image,message,star}=req.body;
    const review=new Review({
        user,image,message,star
    })
    try{
        const savedreview=await review.save()
    return res.json({
        success:true,
        data:savedreview,
        message:"review added successfully"
    })
    }
    catch(err){
        return res.json({
            success:false,
            message:err.message
        })
    }

}

const getapireview=async(req,res)=>{
    const allreview=await Review.find().populate('user')
    return res.json({
        success:true,
        data:allreview,
        message:"review fetchsuccessfully"
    })
}

export {postapireview,getapireview}