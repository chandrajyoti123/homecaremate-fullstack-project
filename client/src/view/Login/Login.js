import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='login-container'>
      <div className='login-child1'>

      </div>
      <div className='login-child2'>
        <div className='login-singup-option'>
          <div className='text '>
            already have an account?
          </div>
          <button className='sign-btn'>Sign Up</button>
        </div>
      <div className=' login-heading'>Welcome to Home Care Made</div>
      <div className='text margin-bottom'>Registered your account</div>

   <div className='input-group'>
   <label htmlFor='email' className='input-label'>Email</label>
      <input type='email' placeholder='Example@gmail.com' id='email' className='input-field' />
   </div>
   
   <div className='input-group'>
   <label htmlFor='password' className='input-label'>Password</label>
   <input type='password' placeholder='At least 8 character' id='password' className='input-field' />
   </div>
   
   <button className='btn'>Login</button>
      </div>

    
    </div>
  )
}
