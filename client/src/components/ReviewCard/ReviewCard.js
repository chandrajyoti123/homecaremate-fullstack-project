import React from 'react'
import './ReviewCard.css'
import stare from './star.png'
import stared from './stared.png'
import { useState } from 'react'

export default function ReviewCard({first_name,last_name,user_img,message,star}) {
    // const [starcounts,setStarcounts]=useState(star)
  return (
    <div className='review-card'>
        <div className='review-card-child1'>
            <img src={user_img} className='review-use-img'/>
             <div>
                <div className='review-use-name'>
                  {first_name} {last_name}
                </div>
                <div className='review-time'>
             27 Dec.2023
                </div>
             </div>

        </div>
        <div className='review-card-child2'>
        {
star!=1?star!=2?star!=3?star!=4?<div><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stared} className='star-img'/></div>:
<div><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stare} className='star-img'/></div>:
<div><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stare} className='star-img'/><img src={stare} className='star-img'/></div>:
<div><img src={stared} className='star-img'/><img src={stared} className='star-img'/><img src={stare} className='star-img'/><img src={stare} className='star-img'/><img src={stare} className='star-img'/></div>:
<div><img src={stared} className='star-img'/><img src={stare} className='star-img'/><img src={stare} className='star-img'/><img src={stare} className='star-img'/><img src={stare} className='star-img'/></div>

    }

        </div>
        <div className='review-card-child3'>
       {message}

        </div>
      
    </div>
  )
}
