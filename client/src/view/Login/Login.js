import React, { useState } from 'react'
import axios from "axios"
import './Login.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  const loginfun=async()=>{
    
    if(!(regEx.test(email))){
      alert('please enter valid email')
      return

    }
    const response=await axios.post('/api/login',{email:email, password:password})
    if(response?.data?.data){
      localStorage.setItem("loginuser",JSON.stringify(response.data.data))
      window.location.href='/'
    }
    else{
      alert(response?.data?.message)
    }

  }

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;



  return (
    <>
    <Navbar/>
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
    </>
  )
}
