import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import signupimg from './../../images/Mobile-login.svg'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
export default function SignUp() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  // const [address, setAddress] = useState('')
  const [phoneno, setPhoneno] = useState('')

  const singupfun = async () => {
    if (!firstname) {
      alert('enter first name')
      return
    }
    if (!lastname) {
      alert('enter lastname name')
      return
    }
    if (!email) {
      alert('enter first email')
      return
    }
    if (!phoneno) {
      alert('enter phone no')
      return
    }
    if(!password1){
      alert("enter password")
      return
    }
    if(!password2){
      alert("enter confirm password")
      return
    }
    if(password1!=password2){
      alert("password should same")
      return

    }
    

    

    const response = await axios.post('/api/users', {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone_no: phoneno,
   
      password: password1

    })

    if (response?.data?.data) {
    
      localStorage.setItem("signupuser",JSON.stringify(response.data.data))
      window.location.href = '/'

    } else {
      alert(response?.data?.message)
    }

   


  }

  return (
    <>
     <Navbar/>
      <div className='signup-container'>

        <div className='singup-child1'>

        </div>
        <div className='singup-child2'>
        <div className='login-singup-option'>
          <div className='text '>
            already have an account?
          </div>
          <Link to={'/login'}><button className='sign-btn'>login</button></Link>
        </div>
        <div className=' login-heading'>Welcome to Home Care Made</div>
      <div className='text margin-bottom'>create a new account</div>
          <div className='main-input-container'>
            <div className='input-group'>
              <label htmlFor='fistname ' className='input-label'>First Name</label>
              <input type='text' placeholder='Ex., Tara' id='fistname' className='input-field singup-inpute'
                value={firstname} onChange={(e) => {
                  setFirstname(e.target.value)
                }} />
            </div>
            <div className='input-group'>
              <label htmlFor='lastname' className='input-label'>Last Name</label>
              <input type='text' placeholder='Ex., Sahu' id='lastname' className='input-field singup-inpute' value={lastname} onChange={(e) => {
                setLastname(e.target.value)
              }} />
            </div>

          </div>
          <div className='main-input-container'>
            <div className='input-group'>
              <label htmlFor='email ' className='input-label'>Email</label>
              <input type='email' placeholder='Example@gmail.com' id='email' className='input-field singup-inpute'
                value={email} onChange={(e) => {
                  setEmail(e.target.value)
                }} />
            </div>
            <div className='input-group'>
              <label htmlFor='phoneno' className='input-label'>Phone No</label>
              <input type='phone' placeholder='+91' id='phoneno' className='input-field singup-inpute' value={phoneno} onChange={(e) => {
                setPhoneno(e.target.value)
              }} />
            </div>

          </div>

          
          <div className='main-input-container'>
            <div className='input-group'>
              <label htmlFor='password1 ' className='input-label'>Create Password</label>
              <input type='password' placeholder='at least 8 character' id='password1' className='input-field singup-inpute'
                value={password1} onChange={(e) => {
                  setPassword1(e.target.value)
                }} />
            </div>
            <div className='input-group'>
              <label htmlFor='password2' className='input-label'>Confirm Password</label>
              <input type='password' placeholder='Confirm' id='password2' className='input-field singup-inpute' value={password2} onChange={(e) => {
                setPassword2(e.target.value)
              }} />
            </div>

          </div>

          <button className='btn' onClick={singupfun}>Creat Account</button>
        


        </div>
       

      </div>
    </>


  )
}
