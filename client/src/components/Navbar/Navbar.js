import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './psedo-logo.png'
import user from './user-img.png'
import user2 from './user-img2.png'
import smile from './smile.png'
import SignUp from '../../view/SingUp/SignUp'
import { Link, json } from 'react-router-dom'
import { set } from 'mongoose'
export default function Navbar() {
    const [signupuser, setSignupuser] = useState("")
    const [loginuser, setLoginuser] = useState("")
    const [popup, setPopup] = useState("displaynone")
    const [ispopup, setIspopup] = useState(false)

    const loaduser = () => {
        const response = JSON.parse(localStorage.getItem('signupuser'))
        setSignupuser(response)

    }
    const loadloginuser = () => {
        const response = JSON.parse(localStorage.getItem('loginuser'))
        setLoginuser(response)
    }
    useEffect(() => {
        loaduser()
        loadloginuser();

    }, [])

    const togglepopup = () => {
        ispopup == false ? setPopup("") : setPopup("displaynone");
        ispopup == false ? setIspopup(true) : setIspopup(false)
    }

    //   ------------image uploading----------

    const [url, setUrl] = useState('')
    const [userimage, setUserimage] = useState('')
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];


        const base64 = await convertToBase64(file);
        localStorage.setItem("userimg", JSON.stringify(base64))
        setUrl(base64)
       
        // setPostImage({ ...postImage, myFile: base64 })
    }

    const loaduserimg = () => {
        const response = JSON.parse(localStorage.getItem('userimg'))
        setUserimage(response)
    }
    useEffect(() => {
        loaduserimg()

    }, [url])
    console.log(userimage)

    const logout=()=>{
        localStorage.removeItem('loginuser')
        localStorage.removeItem("userimg")
        window.location.href='/login'
        
    }
  const something=()=>{

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
                        <img className='user-img' src={loginuser ? userimage ? userimage : user : user} onClick={loginuser?togglepopup:something} />
                        {
                            signupuser ? loginuser ? <div className='sing-up-text'>{loginuser?.first_name}</div> : <Link to={'/login'} className='sing-up-text'>login</Link> : <Link to={'/singup'} className='sing-up-text'>Sing Up</Link>
                        }

                    </div>

                </div>

            </div>
            <div className={`popwindow ${popup}`}>
                <div>
                    <img src={loginuser ? userimage ? userimage : user2 : user2} className='usertwo' />
                    <label htmlFor='file-upload'><div className='user-label'><img src={smile} className='checkboxicon' /></div></label>
                    <input
                        className='displaynone'
                        type="file"
                        lable="Image"
                        name="myFile"
                        id='file-upload'
                        accept='.jpeg, .png, .jpg'
                        onChange={(e) => handleFileUpload(e)}

                    />
                </div>
                <div className='your-profile'>Your profile</div>
                <ul>
                  <li><Link to={'/yourservices'} className='nav-link white'> your services</Link></li>
                   <li>setting</li>  
                   <li>   tools</li>
                </ul>

                <button className='btn logout' onClick={logout}>log out</button>


            </div>
        </>
    )


}

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}


