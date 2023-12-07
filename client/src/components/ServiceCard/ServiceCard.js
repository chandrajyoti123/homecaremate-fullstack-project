import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'


export default function ServiceCard({service_img,service_name,service_info,_id}) {
  return (
    <>
    <Link to={`/palcedservice/${_id}`} className='text-docation'>
    <div className='service-card'>
    <div className='service-heading'>{service_name}</div>
        <img src={service_img} className='service-img'/>
       
        <div className='service-caption'>{service_info}</div>
      
    </div>
    </Link>
    </>
  )
}
