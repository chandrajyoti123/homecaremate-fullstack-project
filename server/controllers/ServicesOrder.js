import Order from "../models/ServicesOrder.js";
const apipostorder = async (req, res) => {
    const { shift, country, state, city, pincode, userid , serviceid, charges } = req.body

    const order = new Order({
        shift, country, state, city, pincode, userid, serviceid, charges
    })

    try {
        const savedorder = await order.save()
        return res.json({
            success: true,
            data: savedorder,
            message: 'service placed successfully'
        })
    }
    catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
}

export {apipostorder};

// const apigetorder=async( req,res)=>{
//     const allorder=await Order.find()
//     return res.json({
//         success:true,
//         data:allorder,
//         message:"order fetched successfully"
//     })

// }



