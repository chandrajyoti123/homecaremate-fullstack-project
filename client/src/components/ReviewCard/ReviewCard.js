import React, { useEffect } from 'react'
import './ReviewCard.css'
import stare from './star.png'
import stared from './stared.png'
import { useState} from 'react'
import user_img2 from './user-img.png'


export default function ReviewCard({first_name,last_name,user_img,message,star,createdat}) {
    const [creatat,setCreatat]=useState('')
    const loadcreatedat=()=>{
      setCreatat(createdat)
    }
    useEffect(()=>{
      loadcreatedat()
    

    },[])
    const date = new Date(creatat).toLocaleDateString();
                const time = new Date(creatat).toLocaleTimeString()
  
  
  return (
    <div className='review-card'>
        <div className='review-card-child1'>
            <img src={user_img?user_img:user_img2} className='review-use-img'/>
             <div>
                <div className='review-use-name'>
                  {first_name} {last_name}
                </div>
                <div className='review-time'>
             {createdat? date:''} {createdat? time:''}
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
