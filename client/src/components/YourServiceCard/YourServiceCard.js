import React from 'react'
import './YourServiceCard.css'
import user from './user-img.png'

export default function YourServiceCard({service_img,service_name,country,state,city,pincode,charges,shift}) {
  return (
    <div className='your-service-card'>
        <div className='your-service-card1'>
          
            <img src={service_img} className="yourserviceimg"/>

        </div>
        <div className='your-service-card2'>
        <div className='service-card-heading'>{service_name}</div>
           <div className='list-of-order-info'>
           <div className='charge-order'>Charge:₹{charges}</div>
            <div className='shift-order'>shift:{shift}</div>
            <div className='address-order'> address:{city} {state} {country} {pincode} </div>
           </div>

        </div>
      
    </div>
  )
}
