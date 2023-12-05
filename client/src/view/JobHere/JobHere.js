


import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './JobHere.css'
import Navbar from './../../components/Navbar/Navbar.js'
import showToast from 'crunchy-toast';

function JobHere() {

  const [user, setUser] = useState("");
  const [fullname, setFullname] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [address, setAddress] = useState("");
  const [addarno, setAddarno] = useState("");
  const [jobcategory, setJobcategory] = useState("Cooks");
  const [gender, setGender] = useState("Male");



  const [job, setJob] = useState([]);

  const loadposttransaction = async () => {
   
    if (!fullname) {
      showToast('Fullname is required', 'alert', 6000);
    }
    if (!imageurl) {
      showToast('Imageurl is required', 'alert', 6000);
    }
    if (!addarno) {
      showToast('Addar no. is required', 'alert', 6000);
    }
    if (!address) {
      showToast('Address is required', 'alert', 6000);
    }



    const data = {
      user,
      fullname,
      imageurl,
      addarno,
      address,
      jobcategory,
      gender
    }

    const response = await axios.post("/api/job", data)


    if (response?.data?.success) {
      window.location.href = "/jobhere";
      showToast(response?.data?.message, 'success', 3000)

    }
    else {
      // alert(response?.data?.message)
      setFullname('')
      setImageurl('')
      setAddarno('')
      setAddress('')

    }



  }
  const localStoragedata = JSON.parse(localStorage.getItem("loginuser") || "{}");
  // console.log(localStoragedata);

  const loadData = async () => {
    const response = await axios.get(`/api/job/user/${localStoragedata?._id}`)
    setJob(response?.data?.data)
    // console.log(response?.data?.data)
    console.log(localStoragedata?._id)
    console.log(response.data.data)
    setUser(localStoragedata?._id)
  }




  const deleteTransition = async (_id) => {


    const response = await axios.delete(`/api/job/${_id}`);
    // console.log("id=", _id)
    if (response?.data?.message) {
      loadData();

    }
  };

  useEffect(() => {
    loadData()

    const storageUser = JSON.parse(localStorage.getItem("loginuser") || "{}");
    console.log(storageUser);

    // if (!storageUser?.email) {
    //   showToast('please Account login !', 'alert', 6000);
    //   alert("Please Account login !");
    //   window.location.href = "/login";
    // }
  }, [])


  return (

    <div>
   
<Navbar/>
      <div className='alltransaction-container'>
        <div className='trans-container-main'>
          <h1>Add Job Details ➕</h1>
          <p></p>
          {/* <p className='col-bla'>User ID  No. : {user}</p> */}

          <div className='input-1'></div>
          <input type='text'
            className='input-field'
            placeholder='Enter Full Name'
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value)
            }}
          />
<div className='input-1'></div>
          <input type='text'
            className='input-field'
            placeholder='Enter Image URL'
            value={imageurl}
            onChange={(e) => {
              setImageurl(e.target.value)
            }}
          />
<div className='input-1'></div>
<input type='text'
            className='input-field'
            placeholder='Enter Addar No.'
            value={addarno}
            onChange={(e) => {
              setAddarno(e.target.value)
            }}
          />
<div className='input-1'></div>
<input type='text'
            className='input-field'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
<div className='input-1'></div>
          <select className='input-field'
            value={jobcategory}
            onChange={(e) => {
              setJobcategory(e.target.value)
            }}
          >
            <option>Select Category</option>
            <option>House Maid</option>
            <option>Baby Sitters</option>
            <option>Elder Care</option>
            <option>Cooks</option>
            <option>Patient Caretakers</option>
            <option>Nurse</option>
            
          </select>
          <div className='input-1'></div>
         <div>
         <input type='radio'
            name='radio'
            checked={gender === 'Male'}
            value={gender}
            onClick={() => {
              setGender('Male');
            }}
          /> Male <span></span><span></span><span></span>

          <input type='radio'
            name='radio'
            checked={gender === 'Female'}
            value={gender}
            onClick={() => {
              setGender('Female');
            }}
          /> Female
         </div>
         <div className='input-1'></div>

          <p> <button onClick={loadposttransaction} className='btn'>  Register </button></p>



        </div>

        <div className='all-card-container'>
          {
            job?.map((job, i) => {
              const { _id, fullname, addarno, address, jobcategory, imageurl, gender } = job;

              return (
                <div className='transaction-cards' key={i}>
                  <p className='category-transaction'>Name:  {fullname} </p>
                  <p>Addar No : {addarno} </p>

                  <span>Job Category : {jobcategory} </span> 
                  <span>Gender : {gender} </span>
                  <hr />
                  <p>Address : {address}</p>
                  



                 

                

                  <span className='delete-text' onClick={() => {
                    deleteTransition(_id);
                  }}> Delete </span>

                  <span className='edit-text' onClick={() => {
                    
                  }}> Edit </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default JobHere

