import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import signupimg from './../../images/Mobile-login.svg'
export default function SignUp() {
  return (
    <>
    
    <div className='signup-container-main'>
        <div>
          <img className='signup-img' src={signupimg} />
           </div>

        <div className='signup-container'>
        <h2 className='text-center'>SignUp</h2>
         
        <input type='text'
         className='input-box'
          placeholder='Enter your First  Name' 
         
          />

<input type='text'
         className='input-box'
          placeholder='Enter your Last  Name' 
         
          />

        <input type='email'
         className='input-box' 
         placeholder='Enter your Email' 
         
         />

        <input type='text'
         className='input-box'
          placeholder='Enter your Mo. Number'
         
          
          />

<input type='text'
         className='input-box'
          placeholder='Enter your Address'
         
          
          />


        <input type='password'
         className='input-box' 
         placeholder='Enter your Password' 
         
        
         />

        <div className='ml-2'>

          <input  type='radio'
           name='radio'
           
          
         
           />Male


        <input type='radio'
         name='radio'
         
         />Female
        </div>

       <p> <Link to={"/Login"} className='link-form'>Already an Account? </Link></p>

        <button  className='btn-register'>REGISTER</button>
      </div>

      </div>
    </>

    
  )
}
