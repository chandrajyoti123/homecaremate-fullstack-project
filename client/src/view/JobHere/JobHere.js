


import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './JobHere.css'
import Navbar from './../../components/Navbar/Navbar.js'
// import showToast from 'crunchy-toast';
import user_img from './user-img2.png'


function JobHere() {

  const [user, setUser] = useState("");

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






  // const loadposttransaction = async () => {

  //   // if (!fullname) {
  //   //   showToast('Fullname is required', 'alert', 6000);
  //   // }
  //   // if (!imageurl) {
  //   //   showToast('Imageurl is required', 'alert', 6000);
  //   // }
  //   // if (!addarno) {
  //   //   showToast('Addar no. is required', 'alert', 6000);
  //   // }
  //   // if (!address) {
  //   //   showToast('Address is required', 'alert', 6000);
  //   }



  //   const data = {
  //     user,
  //     fullname,
  //     imageurl,
  //     // addarno,
  //     address,
  //     jobcategory,
  //     gender
  //   }

  //   const response = await axios.post("/api/job", data)


  //   if (response?.data?.success) {
  //     window.location.href = "/jobhere";
  //     showToast(response?.data?.message, 'success', 3000)

  //   }
  //   else {
  //     // alert(response?.data?.message)
  //     setFullname('')
  //     // setImageurl('')
  //     // setAddarno('')
  //     setAddress('')

  //   }



  // }
  // const localStoragedata = JSON.parse(localStorage.getItem("loginuser") || "{}");
  // // console.log(localStoragedata);

  // const loadData = async () => {
  //   const response = await axios.get(`/api/job/user/${localStoragedata?._id}`)
  //   setJob(response?.data?.data)
  //   // console.log(response?.data?.data)
  //   console.log(localStoragedata?._id)
  //   console.log(response.data.data)
  //   setUser(localStoragedata?._id)
  // }




  // const deleteTransition = async (_id) => {


  //   const response = await axios.delete(`/api/job/${_id}`);
  //   // console.log("id=", _id)
  //   if (response?.data?.message) {
  //     loadData();

  //   }
  // };

  // useEffect(() => {
  //   loadData()

  //   const storageUser = JSON.parse(localStorage.getItem("loginuser") || "{}");
  //   console.log(storageUser);


  // }, [])


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
                value={firstname} onChange={(e) => {
                  setFirstname(e.target.value)
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
            <img src={user_img} className='jobuser-img' />
            <div className='job-field-con'>
              <div className='input-group'>
                <label className='input-label'>Age</label>
                <input type='Number' placeholder='XXXX XXXX XXXX' className='input-field jobfield agefield'
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
              <select value={jobcategory} onChange={(e)=>{
                onchange(e.target.value)
              }}  className="selec-field">
                <option>select a category</option>
                <option value={'home maid'} >home maid</option>
                <option value={'baby sitter'} >baby sitter</option>
                <option value={'nanny/japa'} >nanny/japa</option>
                <option value={'home cook'} >home cook</option>
                <option value={'patient/elderly caretaker'} >patient/elderly caretaker</option>
                <option value={'home nurse'} >home nurse</option>
 
              </select>

              <select value={shift} onChange={(e)=>{
                setShift(e.target.value)
              
              }} className="selec-field">
                <option>select a shift
                </option>
                <option value={'day shift'} >day shift</option>
                <option value={'night shift'} >night shift</option>
                <option value={'live in'} >live in</option>
               
 
              </select>
              


            </div>

            <div className='input-group margin-top'>
              <label className='input-label'>Expecting Salary</label>
              <input type='Number' placeholder='salary' className='input-field jobfield'
                value={expectingsa} onChange={(e) => {
                  setExpectingsa(e.target.value)
                }} />
            </div>
            <div className='justify-start'>
            <button type='button' className='btn btnjob'>Submit</button>
            </div>


          </div>

        </div>
      </div>



    </>

    //     <div>

    // <Navbar/>
    //       <div className='alltransaction-container'>
    //         <div className='trans-container-main'>
    //           <h1>Add Job Details ➕</h1>
    //           <p></p>


    //           <div className='input-1'></div>
    //           <input type='text'
    //             className='input-field'
    //             placeholder='Enter Full Name'
    //             value={fullname}
    //             onChange={(e) => {
    //               setFullname(e.target.value)
    //             }}
    //           />
    // <div className='input-1'></div>
    //           <input type='text'
    //             className='input-field'
    //             placeholder='Enter Image URL'
    //             value={imageurl}
    //             onChange={(e) => {
    //               setImageurl(e.target.value)
    //             }}
    //           />
    // <div className='input-1'></div>
    // <input type='text'
    //             className='input-field'
    //             placeholder='Enter Addar No.'
    //             value={addarno}
    //             onChange={(e) => {
    //               setAddarno(e.target.value)
    //             }}
    //           />
    // <div className='input-1'></div>
    // <input type='text'
    //             className='input-field'
    //             placeholder='Enter Address'
    //             value={address}
    //             onChange={(e) => {
    //               setAddress(e.target.value)
    //             }}
    //           />
    // <div className='input-1'></div>
    //           <select className='input-field'
    //             value={jobcategory}
    //             onChange={(e) => {
    //               setJobcategory(e.target.value)
    //             }}
    //           >
    //             <option>Select Category</option>
    //             <option>House Maid</option>
    //             <option>Baby Sitters</option>
    //             <option>Elder Care</option>
    //             <option>Cooks</option>
    //             <option>Patient Caretakers</option>
    //             <option>Nurse</option>

    //           </select>
    //           <div className='input-1'></div>
    //          <div>
    //          <input type='radio'
    //             name='radio'
    //             checked={gender === 'Male'}
    //             value={gender}
    //             onClick={() => {
    //               setGender('Male');
    //             }}
    //           /> Male <span></span><span></span><span></span>

    //           <input type='radio'
    //             name='radio'
    //             checked={gender === 'Female'}
    //             value={gender}
    //             onClick={() => {
    //               setGender('Female');
    //             }}
    //           /> Female
    //          </div>
    //          <div className='input-1'></div>

    //           <p> <button onClick={loadposttransaction} className='btn'>  Register </button></p>



    //         </div>

    //         <div className='all-card-container'>
    //           {
    //             job?.map((job, i) => {
    //               const { _id, fullname, addarno, address, jobcategory, imageurl, gender } = job;

    //               return (
    //                 <div className='transaction-cards' key={i}>
    //                   <p className='category-transaction'>Name:  {fullname} </p>
    //                   <p>Addar No : {addarno} </p>

    //                   <span>Job Category : {jobcategory} </span> 
    //                   <span>Gender : {gender} </span>
    //                   <hr />
    //                   <p>Address : {address}</p>








    //                   <span className='delete-text' onClick={() => {
    //                     deleteTransition(_id);
    //                   }}> Delete </span>

    //                   <span className='edit-text' onClick={() => {

    //                   }}> Edit </span>
    //                 </div>
    //               )
    //             })
    //           }
    //         </div>
    //       </div>
    //     </div>
  )
}

export default JobHere

