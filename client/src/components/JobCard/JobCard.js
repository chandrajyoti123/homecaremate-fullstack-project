import React from 'react'
import './JobCard.css'
import user from './user.avif'
import user_img from './user-img.png'
export default function JobCard({img,firstname,lastname,jobcategory,shift,phone_no,email,adhar_no,address,age,gender}) {
    return (
        <div className='jobcard-container'>
            <img src={img?img:user_img} className='job-can-img' />
            <div className='job-can-name'>{firstname} {lastname}</div>
           

           <div className='post-of-services'>
            {jobcategory}
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
                   shift
                </div>
                <div className='field-value'>
                    : {shift}
                </div>
            </div>
            <div className='job-can-field'>
                <div className='field-key'>
                  status
                </div>
                <div className='field-value'>
                    : Availabe
                </div>
            </div>
            


        </div>
    )
}
