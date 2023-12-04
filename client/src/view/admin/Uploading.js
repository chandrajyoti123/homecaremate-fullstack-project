import React from 'react'
import { useState } from 'react'
import './Uploading.css'
import user from './user-img.png'
import axios from "axios"


export default function Uploading() {

    const [name,setName]=useState('')
    const [salary,setSalary]=useState('')
    const [info, setInfo]=useState('')

    const [postImage, setPostImage] = useState({ myFile: "" })
    const [url, setUrl] = useState('')
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];


        const base64 = await convertToBase64(file);
        setUrl(base64)
        setPostImage({ ...postImage, myFile: base64 })
    }

const submitservices=async()=>{
    const response=await axios.post('/api/services',{
        service_name:name, service_img:url, service_sallary:salary,service_info:info
    })
   if(response?.data?.data){
    alert(response?.data?.message)
   }
   else{
    alert(response?.data?.message)
   }

}

    return (
        <div>
            this is uploading img



            <label htmlFor="file-upload" className='uploadlabel' >
                <img src={user} className='img-uploading' />

            </label>
            <input
                className='displaynone'
                type="file"
                lable="Image"
                name="myFile"
                id='file-upload'
                accept='.jpeg, .png, .jpg'
                onChange={(e) => handleFileUpload(e)}

            />




            <img src={url} className='img-uploading' />

            <div className='input-group'>
                <label htmlFor='name' className='input-label'>service name</label>
                <input type='text'  id='name' className='input-field'
                    value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
            </div>
            <div className='input-group'>
                <label htmlFor='salary' className='input-label'>services salary</label>
                <input type='text'  id='salary' className='input-field'
                    value={salary} onChange={(e) => {
                        setSalary(e.target.value)
                    }} />
            </div>
            <div className='input-group'>
                <label htmlFor='info' className='input-label'>services info</label>
                <input type='text'  id='info' className='input-field'
                    value={info} onChange={(e) => {
                       setInfo(e.target.value)
                    }} />
            </div>

            <button type='button' onClick={submitservices}>submit</button>






        </div>
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
