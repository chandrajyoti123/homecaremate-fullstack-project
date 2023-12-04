import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { postapilogin, postapiuser } from "./controllers/User.js";
import { postapiservices, getapiservices,getapioneservices } from "./controllers/Services.js";
import path from "path"


const app=express()
 app.use(express.json())
   const __dirname = path.resolve();


 // ---mongodb connected ----


const connectMongodb = async () => {
    const response = await mongoose.connect(process.env.MONGODB_URI)
    
    if (response) {
        console.log("mongodb  added successfully")
    }
}   
connectMongodb()


 

// --------- api for user -----------

app.post('/api/users',postapiuser)

app.post("/api/login", postapilogin)


// ------api for services------------

app.post('/api/services' , postapiservices);
app.get('/api/services', getapiservices)
app.get("/api/services/:_id",getapioneservices)

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

     app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
     })
  }


// --------server is listning-----------
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
 
})