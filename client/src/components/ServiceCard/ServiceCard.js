import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'


export default function ServiceCard({service_img,service_name,service_info,_id}) {
  return (
    <>
    <Link to={`/palcedservice/${_id}`}>
    <div className='service-card'>
        <img src={service_img}/>
        <div className='service-heading'>{service_name}</div>
        <div className='service-caption'>{service_info}</div>
      
    </div>
    </Link>
    </>
  )
}
