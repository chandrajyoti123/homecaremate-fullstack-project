
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './JobHere.css'
import Navbar from './../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js';

import user_img from './user-img2.png'

export default function JobHere() {
  
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [address, setAddress] = useState("");
  const [adharno, setAdharno] = useState("");
  const [jobcategory, setJobcategory] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("");
  const [shift, setShift] = useState('');
  const [expectingsa, setExpectingsa] = useState('')
  const [user_id, setUser_id] = useState('')
  // ------------imgae url----------

  const [postImage, setPostImage] = useState({ myFile: "" })
    const [url, setUrl] = useState('')
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];


        const base64 = await convertToBase64(file);
        localStorage.setItem("jobcanimg", JSON.stringify(base64))
        setUrl(base64)
        setPostImage({ ...postImage, myFile: base64 })
    }
 

    const loaduserimg = () => {
      const response = JSON.parse(localStorage.getItem('jobcanimg'))
      setImage(response)
  }
  useEffect(() => {
      loaduserimg()

  }, [url])


  const loadloginuser = () => {
    const response = JSON.parse(localStorage.getItem('loginuser'))
    if(response){
      setUser_id(response._id)
    }
  }

  useEffect(()=>{
    loadloginuser();
  },[])
  const postapljobfun=async()=>{

    if(!user_id){
      alert("your have to been login first")
      window.location.href='/login'

  }
    const response=await axios.post('/api/jobs',{
      user:user_id,
      first_name:firstname,
      last_name:lastname,
      phoneno:phoneno,
      email:email,
      image:image,
      address:address,
      adharno:adharno,
      gender:gender,
      age:age,
      jobcategory:jobcategory,
      shift:shift,
      expecting_salary:expectingsa
    })
    if(response?.data?.data){

      alert(response?.data?.message)
      localStorage.removeItem("jobcanimg")
      window.location.href = '/'

    }
    else(
      alert(response?.data?.message)
    )

  }

  useEffect(()=>{
    loadloginuser();

   

    // window.location.href = '/services'

  },[])
  console.log(user_id)
  return (
    <>
    <Navbar />
    <div className='main-container'>

      <div className='heading'>
        are you searching for job
      </div>
      <div className='text jobpara'>
        <p>
          Welcome to our home care mate platform, where household staffing meets excellence. Discover unparalleled service with our curated selection of skilled professionals, offering positions in maid services, nursing, culinary expertise, and childcare. Elevate your home with dedicated and trustworthy individuals ready to fulfill your unique needs.
        </p>
        <p>
          Our user-friendly interface connects employers with top-tier candidates, ensuring a seamless hiring process. Whether you seek a meticulous maid, compassionate nurse, culinary maestro, or a nurturing babysitter, our website is your gateway to unparalleled domestic staffing solutions. Cultivate a harmonious living environment with our diverse array of qualified professionals, each committed to enhancing your home life. Your perfect household team awaits – start your journey with us today.
        </p>

      </div>
      <div className='sub-heading'>you can apply for job for filling this form</div>
      <div className='job-form'>
        <div className='job-form-section1'>

          <div className='input-group'>
            <label className='input-label'>First Name</label>
            <input type='text' placeholder='Tara.,' className='input-field jobfield'
              value={firstname} onChange={(e) => {
                setFirstname(e.target.value)
              }} />
          </div>

          <div className='input-group'>
            <label className='input-label'>Last Name</label>
            <input type='text' placeholder=' Ex.,Shahu' className='input-field jobfield'
              value={lastname} onChange={(e) => {
                setLastname(e.target.value)
              }} />
          </div>

          <div className='input-group'>
            <label className='input-label'>Phone No</label>
            <input type='number' placeholder=' +91' className='input-field jobfield'
              value={phoneno} onChange={(e) => {
                setPhoneno(e.target.value)
              }} />
          </div>

          <div className='input-group'>
            <label className='input-label'>Email</label>
            <input type='email' placeholder='Example@gmail.com' className='input-field jobfield'
              value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
          </div>

          <div className='input-group'>
            <label className='input-label'>Address</label>
            <input type='text' placeholder='Address' className='input-field jobfield'
              value={address} onChange={(e) => {
                setAddress(e.target.value)
              }} />
          </div>

          <div className='input-group'>
            <label className='input-label'>Aadhar No</label>
            <input type='Number' placeholder='XXXX XXXX XXXX' className='input-field jobfield'
              value={adharno} onChange={(e) => {
                setAdharno(e.target.value)
              }} />
          </div>

        </div>
        <div className='job-form-section2'>
          
        <label htmlFor="job-image-upload" className='uploadlabel' >
           <img src={image?image:user_img} className='  jobuser-img'   /> 

          </label>
          <input
              className='displaynone'
              type="file"
              lable="Images"
              name="myFile"
              id='job-image-upload'
              accept='.jpeg, .png, .jpg'
              onChange={(e) => handleFileUpload(e)}

          />

         
          <div className='job-field-con'>
            <div className='input-group'>
              <label className='input-label'>Age</label>
              <input type='Number' placeholder='Ex.,20 year' className='input-field jobfield agefield'
                value={age} onChange={(e) => {
                  setAge(e.target.value)
                }} />
            </div>


            <div className='input-group radio-group'>
              <label className='input-label'>Gender</label>
              <div className="job-user-gender">
                <div className="radio-field">
                  <input type="radio" value={"male"} id="male" className="radio"
                    onChange={(e) => {
                      setGender(e.target.value)
                    }} checked={gender == "male"}
                  />
                  <label className="radio-label" for="male">Male</label>
                </div>

                <div className="radio-field">
                  <input type="radio" value={"female"} id="female" className="radio"
                    onChange={(e) => {
                      setGender(e.target.value)
                    }} checked={gender == "female"}
                  />
                  <label className="radio-label" for="female">Female</label>
                </div>

                <div className="radio-field">
                  <input type="radio" value={"other"} id="other" className="radio"
                    onChange={(e) => {
                      setGender(e.target.value)
                    }} checked={gender == "other"}
                  />
                  <label className="radio-label" for="other">other</label>
                </div>
              </div>
            </div>

          </div>

          <div className='job-field-con'>
            <div className='input-group'>
              <label className='input-label'>Select Category</label>
              <select value={jobcategory} onChange={(e) => {
                setJobcategory(e.target.value)
              }} className="selec-field">
                <option>select a category</option>
                <option value={'home maid'} >home maid</option>
                <option value={'baby sitter'} >baby sitter</option>
                <option value={'nanny/japa'} >nanny/japa</option>
                <option value={'home cook'} >home cook</option>
                <option value={'patient/elderly caretaker'} >patient/elderly caretaker</option>
                <option value={'home nurse'} >home nurse</option>

              </select>
            </div>

            <div className='input-group'>
              <label className='input-label'>Shift</label>
              <select value={shift} onChange={(e) => {
                setShift(e.target.value)

              }} className="selec-field">
                <option>select a shift
                </option>
                <option value={'day shift'} >day shift</option>
                <option value={'night shift'} >night shift</option>
                <option value={'live in'} >live in</option>


              </select>
            </div>





          </div>

          <div className='input-group margin-top'>
            <label className='input-label'>Expecting Salary</label>
            <input type='Number' placeholder='salary' className='input-field jobfield'
              value={expectingsa} onChange={(e) => {
                setExpectingsa(e.target.value)
              }} />
          </div>
          <div className='justify-start'>
            <button type='button' className='btn btnjob' onClick={postapljobfun}>Submit</button>
          </div>


        </div>

      </div>
    </div>
   <Footer/>


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
