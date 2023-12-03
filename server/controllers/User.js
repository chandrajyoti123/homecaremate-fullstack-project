import User from "../models/User.js";
const postapiuser = async (req, res) => {
    const { first_name, last_name, email, phone_no, address, password } = req.body
    const user = new User({ first_name, last_name, email, phone_no, address, password })
    try {
        const saveduser = await user.save()
        return res.json({
            success: true,
            data: saveduser,
            message: "user saved successfully"
        })
    }
    catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const postapilogin=async(req,res)=>{
    const {email, password}=req.body
     if(!email &&  !password){
       return res.json({
            success:false,
            message:"please enter email and password"
        })
    }
  
     const logineduser= await User.findOne({email:email, password:password})

     if(!logineduser){
       return res.json({
            success:false,
            message:"Invalid credential"
        })
     }

    return res.json({
        success:true,
        data:logineduser,
        message:"user login successfully"

      })
      



}
export {postapiuser, postapilogin};