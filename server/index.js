import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
app.use(express.json())
const connectMongoDb= async()=>{
    const connect=await mongoose.connect(process.env.MONGODB_URI)
    if(connect){
        console.log('mongodb connected successfully')
    }
}
connectMongoDb();
const app=express()
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})