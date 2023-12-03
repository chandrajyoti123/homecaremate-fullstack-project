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
export default User;