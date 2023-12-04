import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './psedo-logo.png'
import user from './user-img.png'
import SignUp from '../../view/SingUp/SignUp'
import { Link, json } from 'react-router-dom'
export default function Navbar() {
    const[signupuser,setSignupuser]=useState("")
    const [loginuser,setLoginuser]=useState("")
    const [popup,setPopup]=useState("displaynone")
    const [ispopup,setIspopup]=useState(false)

    const loaduser=()=>{
        const response=JSON.parse(localStorage.getItem('signupuser'))
        setSignupuser(response)
      
    }
    const loadloginuser=()=>{
        const response=JSON.parse(localStorage.getItem('loginuser'))
    setLoginuser(response)
    }
    useEffect(()=>{
        loaduser()
        loadloginuser();

    },[])

    const togglepopup=()=>{
      ispopup==false?setPopup(""):setPopup("displaynone");
      ispopup==false?setIspopup(true):setIspopup(false)
      }

    return (
        <>
        <div className='navbar'>
            <div className='logo-section'>
                <img src={logo} className='logo' />
            </div>
            <div className='list-section'>
                <ul>
                    <li><Link to={'/'} className='nav-link'>home</Link></li>
                    <li><Link to={'/services'} className='nav-link'>services</Link></li>
                    <li><Link to={'/pricing'} className='nav-link'>pricing</Link></li>
                    <li><Link to={'/security'} className='nav-link'>security</Link></li>
                    <li><Link to={'/aboutus'} className='nav-link'>about us</Link></li>
                    <li><Link to={'/jobhere'} className='nav-link'>job</Link></li>
                </ul>

            </div>
            <div className='login-singpu-section'>
                <div className='singupcon'>
                <img className='user-img' src={user} onClick={togglepopup}/>
                {
                    signupuser?loginuser?<div className='sing-up-text'>{loginuser?.first_name}</div>:<Link to={'/login'} className='sing-up-text'>login</Link>:   <Link to={'/singup'} className='sing-up-text'>Sing Up</Link>
                }
                
                </div>

            </div>

        </div>
        <div className={`popwindow ${popup}`}></div>
        </>
    )
}
