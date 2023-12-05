import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import axios from "axios"
import './Services.css'



export default function Services() {
  const [services,setServices]=useState([])
const loadServiceApi=async()=>{
  const response= await axios.get('/api/services')
  
 setServices(response?.data?.data)

}
useEffect(()=>{
  loadServiceApi();

},[])

  return (
    <div>
      <Navbar/>
<div className='services-section'>
{
  services.map((service,i)=>{
    const {service_name,service_img,service_info,_id}=service
   return <ServiceCard service_name={service_name} service_img={service_img} service_info={service_info} _id={_id}/>

  })
}
</div>
    </div>
  )
}
