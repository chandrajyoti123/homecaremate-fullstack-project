import React from 'react'
import './JobCard.css'
import user from './user.avif'
export default function JobCard({img,firstname,lastname,jobcategory,shift,phone_no,email,adhar_no,address,age,gender}) {
    return (
        <div className='jobcard-container'>
            <img src={img} className='job-can-img' />
            <div className='job-can-name'>{firstname} {lastname}</div>
            <div className='job-can-post'>{jobcategory} ({shift})</div>
            <div className='job-can-field'>
                <div className='field-key'>
                    phone no
                </div>
                <div className='field-value'>
                    : {phone_no}
                </div>
            </div>
            <div className='job-can-field'>
                <div className='field-key'>
                   email
                </div>
                <div className='field-value'>
                    :{email}
                </div>
            </div>
            <div className='job-can-field'>
                <div className='field-key'>
                   age
                </div>
                <div className='field-value'>
                    : {age} year
                </div>
            </div>
           
            <div className='job-can-field'>
                <div className='field-key'>
                   gender
                </div>
                <div className='field-value'>
                    : {gender}
                </div>
            </div>
            <div className='job-can-field'>
                <div className='field-key'>
                   adhar no
                </div>
                <div className='field-value'>
                    : {adhar_no}
                </div>
            </div>
            <div className='job-can-field'>
                <div className='field-key'>
                   address
                </div>
                <div className='field-value'>
                    : {address}
                </div>
            </div>
            


        </div>
    )
}
