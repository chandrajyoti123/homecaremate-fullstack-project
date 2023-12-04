import React, { useState } from 'react'
import axios from "axios"
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  const loginfun=async()=>{
    // if(!email){
    //   alert("password is requied")
    // }
    // if(!password){
    //   alert('email is required')
    // }
    const response=await axios.post('/api/login',{email:email, password:password})

    if(response?.data?.success){
      localStorage.setItem('homecarementUser', JSON.stringify(response?.data?.data));
      window.location.href='/'
    }
    else{
      alert(response?.data?.message)
    }

  }



  return (
    <div className='login-container'>
      <div className='login-child1'>

      </div>
      <div className='login-child2'>
        <div className='login-singup-option'>
          <div className='text '>
            You Haven't any account?
          </div>
          <Link to={"/singup"}><button className='sign-btn'>Sign Up</button></Link>
        </div>
      <div className=' login-heading'>Welcome to Home Care Made</div>
      <div className='text margin-bottom'>Registered your account</div>

   <div className='input-group'>
   <label htmlFor='email' className='input-label'>Email</label>
      <input type='email' placeholder='Example@gmail.com' id='email' className='input-field'
       value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
   </div>
   
   <div className='input-group'>
   <label htmlFor='password' className='input-label'>Password</label>
   <input type='password' placeholder='At least 8 character' id='password' className='input-field'  value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
   </div>
   
   <button className='btn' onClick={loginfun}>Login</button>
      </div>

    
    </div>
  )
}
